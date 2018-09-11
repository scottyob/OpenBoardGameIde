import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

import * as THREE from 'three';
import OrbitControls from '../OrbitControls.js';


const styles = theme => {
  return {
    root: {
      display: "flex",
      flexGrow: 1,
      backgroundColor: "red",
      height: "100%",
    }
  }
}

const CAMERA_HEIGHT = 820;

class Viewer extends Component {

  constructor(props) {
    super(props)

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.onResize = this.onResize.bind(this);
    this.redraw = this.redraw.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize.bind(this));

    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      10000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    // Table
    const geometry = new THREE.BoxGeometry(2200, 1, 800);
    let tableTexture = new THREE.TextureLoader().load( "img/table.jpg");
    tableTexture.repeat = new THREE.Vector2(5,5);
    tableTexture.wrapS = tableTexture.wrapT = THREE.RepeatWrapping;
    let material = new THREE.MeshBasicMaterial( { map: tableTexture } );
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 1100;
    cube.position.z = 400;
    cube.position.y = -1.5; // Move down a tiny little bit so origin is exposed

    camera.position.x = 0;
    camera.position.y = CAMERA_HEIGHT;
    camera.position.z = 0;

    scene.add(cube)
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.controls = new OrbitControls( camera, renderer.domElement );
    this.controls.userPanSpeed = 10;
    this.controls.userPan = false;
    this.cube = cube

    this.ry += 1;
    this.camera.rotation.y = 180 * Math.PI / 180;  // Face Backwards.
    this.camera.rotation.x = 70 * Math.PI / 180;  // Look down a little

    this.mount.appendChild(this.renderer.domElement)
    this.start()

    // Kick off the initial draw
    this.redraw();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize.bind(this));
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.renderScene();
    this.controls.update();
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  onResize() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height)
  }

  drawMeshOutline(geometry, mesh, rotation = 0) {
    var outlineMaterial1 = new THREE.MeshBasicMaterial( { color: 0xFFFF00, side: THREE.BackSide } );
    var outlineMesh1 = new THREE.Mesh( geometry, outlineMaterial1 );
    outlineMesh1.rotation.copy(mesh.rotation);
    outlineMesh1.position.copy(mesh.position);
    // outlineMesh1.rotateY(THREE.Math.degToRad(rotation));
    outlineMesh1.rotateX(THREE.Math.degToRad(180));
    outlineMesh1.scale.multiplyScalar(1.05);
    this.group.add( outlineMesh1 );
  }

  centerCamera(object) {
    // Update the camera to point to the selected object.
    this.controls.center = new THREE.Vector3(object.xPos, 0, object.yPos);
    this.camera.position.x = object.xPos;
    this.camera.position.z = object.yPos;
    this.camera.position.y = THREE.Math.clamp(this.camera.position.y, CAMERA_HEIGHT, Infinity);
  }

  redraw() {
    // Redraws the game components on the table
    this.scene.remove(this.group);
    this.group = new THREE.Group();

    // Side of card material
    let cardSideTexture = new THREE.TextureLoader().load( "img/card_side.jpg");
    cardSideTexture.repeat = new THREE.Vector2(5,1);
    cardSideTexture.wrapS = cardSideTexture.wrapT = THREE.RepeatWrapping;
    let cardSideMaterial = new THREE.MeshBasicMaterial( { map: cardSideTexture } );

    // Searches all stacks on the board
    for(let stackIndex = 0; stackIndex < this.props.table.stacks.length; stackIndex++) {
      let stack = this.props.table.stacks[stackIndex];
      if(stack.members.length === 0)
        continue;

      // Temporary.  Load an image from the interwebs.
      // debugger;
      let cardTopTexture = new THREE.TextureLoader().load(stack.members[stack.members.length-1].backUrl);
      // var cardTopTexture = new THREE.TextureLoader().load("img/card_side.jpg");
      let cardTopMaterial = new THREE.MeshBasicMaterial( {
         map: cardTopTexture,
         color: 0xffffff,
         transparent: true,
       })

      // Generate materials for this stack
      let materials = [
        cardSideMaterial,
        cardSideMaterial,
        cardTopMaterial,
        cardSideMaterial,
        cardSideMaterial,
        cardSideMaterial
      ]

      // Find an item in this stack.
      let boxGeometry = new THREE.BoxGeometry( stack.members[0].width, 15, stack.members[0].height);
      let box = new THREE.Mesh(
        boxGeometry,
        materials
      )


      box.position.x = stack.xPos || 0;
      box.position.y = 8;
      box.position.z = stack.yPos || 0;
      box.rotateY(THREE.Math.degToRad(stack.rotation));

      if(stack.uuid === this.props.selectedUuid) {
        this.drawMeshOutline(boxGeometry, box, stack.rotation);
        this.centerCamera(stack);
      }

      this.group.add(box);
    }

    // Add Components to the board
    for(let i = 0; i < this.props.table.components.length; i++) {
      let component = this.props.table.components[i];

      let cardTexture = new THREE.TextureLoader().load(component.frontUrl);
      let cardMaterial = new THREE.MeshBasicMaterial( {
         map: cardTexture,
         color: 0xffffff,
         transparent: true,
       });

       let cardGeometry = new THREE.PlaneGeometry(component.width, component.height);
       let card = new THREE.Mesh( cardGeometry, cardMaterial );
       card.position.x = component.xPos;
       card.position.z = component.yPos;
       card.rotateY(THREE.Math.degToRad(component.rotation));
       card.rotateX(THREE.Math.degToRad(-90));

       if(component.uuid === this.props.selectedUuid) {
         this.drawMeshOutline(cardGeometry, card, component.rotation);
         this.centerCamera(component);
       }

       this.group.add(card);
    }

    this.scene.add(this.group);
  }

  render() {
    const { classes } = this.props;

    // We have already rendered an object.  We should re-draw the scene.
    if(this.mount) {
      this.onResize();
      this.redraw();
    }

    return (
      <div
        tabindex="0"
        className={classes.root}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default withStyles(styles)(Viewer);