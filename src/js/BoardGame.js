/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameComponent = (function() {

    /**
     * Properties of a GameComponent.
     * @exports IGameComponent
     * @interface IGameComponent
     * @property {string|null} [uuid] GameComponent uuid
     * @property {GameComponent.ComponentType|null} [componentType] GameComponent componentType
     * @property {number|null} [xPos] GameComponent xPos
     * @property {number|null} [yPos] GameComponent yPos
     * @property {number|Long|null} [rotation] GameComponent rotation
     * @property {number|null} [width] GameComponent width
     * @property {number|null} [height] GameComponent height
     * @property {string|null} [frontUrl] GameComponent frontUrl
     * @property {string|null} [backUrl] GameComponent backUrl
     * @property {string|null} [displayName] GameComponent displayName
     * @property {string|null} [stackableIdentifier] GameComponent stackableIdentifier
     * @property {Object.<string,string>|null} [additionalProperties] GameComponent additionalProperties
     * @property {number|Long|null} [movingPlayer] GameComponent movingPlayer
     * @property {boolean|null} [faceUp] GameComponent faceUp
     */

    /**
     * Constructs a new GameComponent.
     * @exports GameComponent
     * @classdesc Represents a GameComponent.
     * @implements IGameComponent
     * @constructor
     * @param {IGameComponent=} [properties] Properties to set
     */
    function GameComponent(properties) {
        this.additionalProperties = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameComponent uuid.
     * @member {string} uuid
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.uuid = "";

    /**
     * GameComponent componentType.
     * @member {GameComponent.ComponentType} componentType
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.componentType = 0;

    /**
     * GameComponent xPos.
     * @member {number} xPos
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.xPos = 0;

    /**
     * GameComponent yPos.
     * @member {number} yPos
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.yPos = 0;

    /**
     * GameComponent rotation.
     * @member {number|Long} rotation
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.rotation = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameComponent width.
     * @member {number} width
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.width = 0;

    /**
     * GameComponent height.
     * @member {number} height
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.height = 0;

    /**
     * GameComponent frontUrl.
     * @member {string} frontUrl
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.frontUrl = "";

    /**
     * GameComponent backUrl.
     * @member {string} backUrl
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.backUrl = "";

    /**
     * GameComponent displayName.
     * @member {string} displayName
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.displayName = "";

    /**
     * GameComponent stackableIdentifier.
     * @member {string} stackableIdentifier
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.stackableIdentifier = "";

    /**
     * GameComponent additionalProperties.
     * @member {Object.<string,string>} additionalProperties
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.additionalProperties = $util.emptyObject;

    /**
     * GameComponent movingPlayer.
     * @member {number|Long} movingPlayer
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.movingPlayer = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameComponent faceUp.
     * @member {boolean} faceUp
     * @memberof GameComponent
     * @instance
     */
    GameComponent.prototype.faceUp = false;

    /**
     * Creates a new GameComponent instance using the specified properties.
     * @function create
     * @memberof GameComponent
     * @static
     * @param {IGameComponent=} [properties] Properties to set
     * @returns {GameComponent} GameComponent instance
     */
    GameComponent.create = function create(properties) {
        return new GameComponent(properties);
    };

    /**
     * Encodes the specified GameComponent message. Does not implicitly {@link GameComponent.verify|verify} messages.
     * @function encode
     * @memberof GameComponent
     * @static
     * @param {IGameComponent} message GameComponent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameComponent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
        if (message.componentType != null && message.hasOwnProperty("componentType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.componentType);
        if (message.xPos != null && message.hasOwnProperty("xPos"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.xPos);
        if (message.yPos != null && message.hasOwnProperty("yPos"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.yPos);
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.rotation);
        if (message.width != null && message.hasOwnProperty("width"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.width);
        if (message.height != null && message.hasOwnProperty("height"))
            writer.uint32(/* id 7, wireType 5 =*/61).float(message.height);
        if (message.frontUrl != null && message.hasOwnProperty("frontUrl"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.frontUrl);
        if (message.backUrl != null && message.hasOwnProperty("backUrl"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.backUrl);
        if (message.displayName != null && message.hasOwnProperty("displayName"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.displayName);
        if (message.stackableIdentifier != null && message.hasOwnProperty("stackableIdentifier"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.stackableIdentifier);
        if (message.additionalProperties != null && message.hasOwnProperty("additionalProperties"))
            for (var keys = Object.keys(message.additionalProperties), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.additionalProperties[keys[i]]).ldelim();
        if (message.movingPlayer != null && message.hasOwnProperty("movingPlayer"))
            writer.uint32(/* id 13, wireType 0 =*/104).int64(message.movingPlayer);
        if (message.faceUp != null && message.hasOwnProperty("faceUp"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.faceUp);
        return writer;
    };

    /**
     * Encodes the specified GameComponent message, length delimited. Does not implicitly {@link GameComponent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameComponent
     * @static
     * @param {IGameComponent} message GameComponent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameComponent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameComponent message from the specified reader or buffer.
     * @function decode
     * @memberof GameComponent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameComponent} GameComponent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameComponent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameComponent(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uuid = reader.string();
                break;
            case 2:
                message.componentType = reader.int32();
                break;
            case 3:
                message.xPos = reader.float();
                break;
            case 4:
                message.yPos = reader.float();
                break;
            case 5:
                message.rotation = reader.int64();
                break;
            case 6:
                message.width = reader.float();
                break;
            case 7:
                message.height = reader.float();
                break;
            case 8:
                message.frontUrl = reader.string();
                break;
            case 9:
                message.backUrl = reader.string();
                break;
            case 10:
                message.displayName = reader.string();
                break;
            case 11:
                message.stackableIdentifier = reader.string();
                break;
            case 12:
                reader.skip().pos++;
                if (message.additionalProperties === $util.emptyObject)
                    message.additionalProperties = {};
                key = reader.string();
                reader.pos++;
                message.additionalProperties[key] = reader.string();
                break;
            case 13:
                message.movingPlayer = reader.int64();
                break;
            case 14:
                message.faceUp = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameComponent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameComponent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameComponent} GameComponent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameComponent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameComponent message.
     * @function verify
     * @memberof GameComponent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameComponent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            if (!$util.isString(message.uuid))
                return "uuid: string expected";
        if (message.componentType != null && message.hasOwnProperty("componentType"))
            switch (message.componentType) {
            default:
                return "componentType: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.xPos != null && message.hasOwnProperty("xPos"))
            if (typeof message.xPos !== "number")
                return "xPos: number expected";
        if (message.yPos != null && message.hasOwnProperty("yPos"))
            if (typeof message.yPos !== "number")
                return "yPos: number expected";
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (!$util.isInteger(message.rotation) && !(message.rotation && $util.isInteger(message.rotation.low) && $util.isInteger(message.rotation.high)))
                return "rotation: integer|Long expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (typeof message.width !== "number")
                return "width: number expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (typeof message.height !== "number")
                return "height: number expected";
        if (message.frontUrl != null && message.hasOwnProperty("frontUrl"))
            if (!$util.isString(message.frontUrl))
                return "frontUrl: string expected";
        if (message.backUrl != null && message.hasOwnProperty("backUrl"))
            if (!$util.isString(message.backUrl))
                return "backUrl: string expected";
        if (message.displayName != null && message.hasOwnProperty("displayName"))
            if (!$util.isString(message.displayName))
                return "displayName: string expected";
        if (message.stackableIdentifier != null && message.hasOwnProperty("stackableIdentifier"))
            if (!$util.isString(message.stackableIdentifier))
                return "stackableIdentifier: string expected";
        if (message.additionalProperties != null && message.hasOwnProperty("additionalProperties")) {
            if (!$util.isObject(message.additionalProperties))
                return "additionalProperties: object expected";
            var key = Object.keys(message.additionalProperties);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.additionalProperties[key[i]]))
                    return "additionalProperties: string{k:string} expected";
        }
        if (message.movingPlayer != null && message.hasOwnProperty("movingPlayer"))
            if (!$util.isInteger(message.movingPlayer) && !(message.movingPlayer && $util.isInteger(message.movingPlayer.low) && $util.isInteger(message.movingPlayer.high)))
                return "movingPlayer: integer|Long expected";
        if (message.faceUp != null && message.hasOwnProperty("faceUp"))
            if (typeof message.faceUp !== "boolean")
                return "faceUp: boolean expected";
        return null;
    };

    /**
     * Creates a GameComponent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameComponent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameComponent} GameComponent
     */
    GameComponent.fromObject = function fromObject(object) {
        if (object instanceof $root.GameComponent)
            return object;
        var message = new $root.GameComponent();
        if (object.uuid != null)
            message.uuid = String(object.uuid);
        switch (object.componentType) {
        case "DISPLAY_2D":
        case 0:
            message.componentType = 0;
            break;
        case "DISPLAY_3D":
        case 1:
            message.componentType = 1;
            break;
        }
        if (object.xPos != null)
            message.xPos = Number(object.xPos);
        if (object.yPos != null)
            message.yPos = Number(object.yPos);
        if (object.rotation != null)
            if ($util.Long)
                (message.rotation = $util.Long.fromValue(object.rotation)).unsigned = false;
            else if (typeof object.rotation === "string")
                message.rotation = parseInt(object.rotation, 10);
            else if (typeof object.rotation === "number")
                message.rotation = object.rotation;
            else if (typeof object.rotation === "object")
                message.rotation = new $util.LongBits(object.rotation.low >>> 0, object.rotation.high >>> 0).toNumber();
        if (object.width != null)
            message.width = Number(object.width);
        if (object.height != null)
            message.height = Number(object.height);
        if (object.frontUrl != null)
            message.frontUrl = String(object.frontUrl);
        if (object.backUrl != null)
            message.backUrl = String(object.backUrl);
        if (object.displayName != null)
            message.displayName = String(object.displayName);
        if (object.stackableIdentifier != null)
            message.stackableIdentifier = String(object.stackableIdentifier);
        if (object.additionalProperties) {
            if (typeof object.additionalProperties !== "object")
                throw TypeError(".GameComponent.additionalProperties: object expected");
            message.additionalProperties = {};
            for (var keys = Object.keys(object.additionalProperties), i = 0; i < keys.length; ++i)
                message.additionalProperties[keys[i]] = String(object.additionalProperties[keys[i]]);
        }
        if (object.movingPlayer != null)
            if ($util.Long)
                (message.movingPlayer = $util.Long.fromValue(object.movingPlayer)).unsigned = false;
            else if (typeof object.movingPlayer === "string")
                message.movingPlayer = parseInt(object.movingPlayer, 10);
            else if (typeof object.movingPlayer === "number")
                message.movingPlayer = object.movingPlayer;
            else if (typeof object.movingPlayer === "object")
                message.movingPlayer = new $util.LongBits(object.movingPlayer.low >>> 0, object.movingPlayer.high >>> 0).toNumber();
        if (object.faceUp != null)
            message.faceUp = Boolean(object.faceUp);
        return message;
    };

    /**
     * Creates a plain object from a GameComponent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameComponent
     * @static
     * @param {GameComponent} message GameComponent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameComponent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.additionalProperties = {};
        if (options.defaults) {
            object.uuid = "";
            object.componentType = options.enums === String ? "DISPLAY_2D" : 0;
            object.xPos = 0;
            object.yPos = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rotation = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rotation = options.longs === String ? "0" : 0;
            object.width = 0;
            object.height = 0;
            object.frontUrl = "";
            object.backUrl = "";
            object.displayName = "";
            object.stackableIdentifier = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.movingPlayer = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.movingPlayer = options.longs === String ? "0" : 0;
            object.faceUp = false;
        }
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            object.uuid = message.uuid;
        if (message.componentType != null && message.hasOwnProperty("componentType"))
            object.componentType = options.enums === String ? $root.GameComponent.ComponentType[message.componentType] : message.componentType;
        if (message.xPos != null && message.hasOwnProperty("xPos"))
            object.xPos = options.json && !isFinite(message.xPos) ? String(message.xPos) : message.xPos;
        if (message.yPos != null && message.hasOwnProperty("yPos"))
            object.yPos = options.json && !isFinite(message.yPos) ? String(message.yPos) : message.yPos;
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (typeof message.rotation === "number")
                object.rotation = options.longs === String ? String(message.rotation) : message.rotation;
            else
                object.rotation = options.longs === String ? $util.Long.prototype.toString.call(message.rotation) : options.longs === Number ? new $util.LongBits(message.rotation.low >>> 0, message.rotation.high >>> 0).toNumber() : message.rotation;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
        if (message.frontUrl != null && message.hasOwnProperty("frontUrl"))
            object.frontUrl = message.frontUrl;
        if (message.backUrl != null && message.hasOwnProperty("backUrl"))
            object.backUrl = message.backUrl;
        if (message.displayName != null && message.hasOwnProperty("displayName"))
            object.displayName = message.displayName;
        if (message.stackableIdentifier != null && message.hasOwnProperty("stackableIdentifier"))
            object.stackableIdentifier = message.stackableIdentifier;
        var keys2;
        if (message.additionalProperties && (keys2 = Object.keys(message.additionalProperties)).length) {
            object.additionalProperties = {};
            for (var j = 0; j < keys2.length; ++j)
                object.additionalProperties[keys2[j]] = message.additionalProperties[keys2[j]];
        }
        if (message.movingPlayer != null && message.hasOwnProperty("movingPlayer"))
            if (typeof message.movingPlayer === "number")
                object.movingPlayer = options.longs === String ? String(message.movingPlayer) : message.movingPlayer;
            else
                object.movingPlayer = options.longs === String ? $util.Long.prototype.toString.call(message.movingPlayer) : options.longs === Number ? new $util.LongBits(message.movingPlayer.low >>> 0, message.movingPlayer.high >>> 0).toNumber() : message.movingPlayer;
        if (message.faceUp != null && message.hasOwnProperty("faceUp"))
            object.faceUp = message.faceUp;
        return object;
    };

    /**
     * Converts this GameComponent to JSON.
     * @function toJSON
     * @memberof GameComponent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameComponent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * ComponentType enum.
     * @name GameComponent.ComponentType
     * @enum {string}
     * @property {number} DISPLAY_2D=0 DISPLAY_2D value
     * @property {number} DISPLAY_3D=1 DISPLAY_3D value
     */
    GameComponent.ComponentType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DISPLAY_2D"] = 0;
        values[valuesById[1] = "DISPLAY_3D"] = 1;
        return values;
    })();

    return GameComponent;
})();

$root.GameComponentStack = (function() {

    /**
     * Properties of a GameComponentStack.
     * @exports IGameComponentStack
     * @interface IGameComponentStack
     * @property {string|null} [uuid] GameComponentStack uuid
     * @property {Array.<IGameComponent>|null} [members] GameComponentStack members
     * @property {number|null} [xPos] GameComponentStack xPos
     * @property {number|null} [yPos] GameComponentStack yPos
     * @property {number|Long|null} [rotation] GameComponentStack rotation
     * @property {string|null} [testing] GameComponentStack testing
     * @property {number|Long|null} [movingPlayer] GameComponentStack movingPlayer
     */

    /**
     * Constructs a new GameComponentStack.
     * @exports GameComponentStack
     * @classdesc Represents a GameComponentStack.
     * @implements IGameComponentStack
     * @constructor
     * @param {IGameComponentStack=} [properties] Properties to set
     */
    function GameComponentStack(properties) {
        this.members = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameComponentStack uuid.
     * @member {string} uuid
     * @memberof GameComponentStack
     * @instance
     */
    GameComponentStack.prototype.uuid = "";

    /**
     * GameComponentStack members.
     * @member {Array.<IGameComponent>} members
     * @memberof GameComponentStack
     * @instance
     */
    GameComponentStack.prototype.members = $util.emptyArray;

    /**
     * GameComponentStack xPos.
     * @member {number} xPos
     * @memberof GameComponentStack
     * @instance
     */
    GameComponentStack.prototype.xPos = 0;

    /**
     * GameComponentStack yPos.
     * @member {number} yPos
     * @memberof GameComponentStack
     * @instance
     */
    GameComponentStack.prototype.yPos = 0;

    /**
     * GameComponentStack rotation.
     * @member {number|Long} rotation
     * @memberof GameComponentStack
     * @instance
     */
    GameComponentStack.prototype.rotation = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GameComponentStack testing.
     * @member {string} testing
     * @memberof GameComponentStack
     * @instance
     */
    GameComponentStack.prototype.testing = "";

    /**
     * GameComponentStack movingPlayer.
     * @member {number|Long} movingPlayer
     * @memberof GameComponentStack
     * @instance
     */
    GameComponentStack.prototype.movingPlayer = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GameComponentStack instance using the specified properties.
     * @function create
     * @memberof GameComponentStack
     * @static
     * @param {IGameComponentStack=} [properties] Properties to set
     * @returns {GameComponentStack} GameComponentStack instance
     */
    GameComponentStack.create = function create(properties) {
        return new GameComponentStack(properties);
    };

    /**
     * Encodes the specified GameComponentStack message. Does not implicitly {@link GameComponentStack.verify|verify} messages.
     * @function encode
     * @memberof GameComponentStack
     * @static
     * @param {IGameComponentStack} message GameComponentStack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameComponentStack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
        if (message.members != null && message.members.length)
            for (var i = 0; i < message.members.length; ++i)
                $root.GameComponent.encode(message.members[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.xPos != null && message.hasOwnProperty("xPos"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.xPos);
        if (message.yPos != null && message.hasOwnProperty("yPos"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.yPos);
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.rotation);
        if (message.testing != null && message.hasOwnProperty("testing"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.testing);
        if (message.movingPlayer != null && message.hasOwnProperty("movingPlayer"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.movingPlayer);
        return writer;
    };

    /**
     * Encodes the specified GameComponentStack message, length delimited. Does not implicitly {@link GameComponentStack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameComponentStack
     * @static
     * @param {IGameComponentStack} message GameComponentStack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameComponentStack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameComponentStack message from the specified reader or buffer.
     * @function decode
     * @memberof GameComponentStack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameComponentStack} GameComponentStack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameComponentStack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameComponentStack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uuid = reader.string();
                break;
            case 2:
                if (!(message.members && message.members.length))
                    message.members = [];
                message.members.push($root.GameComponent.decode(reader, reader.uint32()));
                break;
            case 3:
                message.xPos = reader.float();
                break;
            case 4:
                message.yPos = reader.float();
                break;
            case 5:
                message.rotation = reader.int64();
                break;
            case 6:
                message.testing = reader.string();
                break;
            case 7:
                message.movingPlayer = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameComponentStack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameComponentStack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameComponentStack} GameComponentStack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameComponentStack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameComponentStack message.
     * @function verify
     * @memberof GameComponentStack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameComponentStack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            if (!$util.isString(message.uuid))
                return "uuid: string expected";
        if (message.members != null && message.hasOwnProperty("members")) {
            if (!Array.isArray(message.members))
                return "members: array expected";
            for (var i = 0; i < message.members.length; ++i) {
                var error = $root.GameComponent.verify(message.members[i]);
                if (error)
                    return "members." + error;
            }
        }
        if (message.xPos != null && message.hasOwnProperty("xPos"))
            if (typeof message.xPos !== "number")
                return "xPos: number expected";
        if (message.yPos != null && message.hasOwnProperty("yPos"))
            if (typeof message.yPos !== "number")
                return "yPos: number expected";
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (!$util.isInteger(message.rotation) && !(message.rotation && $util.isInteger(message.rotation.low) && $util.isInteger(message.rotation.high)))
                return "rotation: integer|Long expected";
        if (message.testing != null && message.hasOwnProperty("testing"))
            if (!$util.isString(message.testing))
                return "testing: string expected";
        if (message.movingPlayer != null && message.hasOwnProperty("movingPlayer"))
            if (!$util.isInteger(message.movingPlayer) && !(message.movingPlayer && $util.isInteger(message.movingPlayer.low) && $util.isInteger(message.movingPlayer.high)))
                return "movingPlayer: integer|Long expected";
        return null;
    };

    /**
     * Creates a GameComponentStack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameComponentStack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameComponentStack} GameComponentStack
     */
    GameComponentStack.fromObject = function fromObject(object) {
        if (object instanceof $root.GameComponentStack)
            return object;
        var message = new $root.GameComponentStack();
        if (object.uuid != null)
            message.uuid = String(object.uuid);
        if (object.members) {
            if (!Array.isArray(object.members))
                throw TypeError(".GameComponentStack.members: array expected");
            message.members = [];
            for (var i = 0; i < object.members.length; ++i) {
                if (typeof object.members[i] !== "object")
                    throw TypeError(".GameComponentStack.members: object expected");
                message.members[i] = $root.GameComponent.fromObject(object.members[i]);
            }
        }
        if (object.xPos != null)
            message.xPos = Number(object.xPos);
        if (object.yPos != null)
            message.yPos = Number(object.yPos);
        if (object.rotation != null)
            if ($util.Long)
                (message.rotation = $util.Long.fromValue(object.rotation)).unsigned = false;
            else if (typeof object.rotation === "string")
                message.rotation = parseInt(object.rotation, 10);
            else if (typeof object.rotation === "number")
                message.rotation = object.rotation;
            else if (typeof object.rotation === "object")
                message.rotation = new $util.LongBits(object.rotation.low >>> 0, object.rotation.high >>> 0).toNumber();
        if (object.testing != null)
            message.testing = String(object.testing);
        if (object.movingPlayer != null)
            if ($util.Long)
                (message.movingPlayer = $util.Long.fromValue(object.movingPlayer)).unsigned = false;
            else if (typeof object.movingPlayer === "string")
                message.movingPlayer = parseInt(object.movingPlayer, 10);
            else if (typeof object.movingPlayer === "number")
                message.movingPlayer = object.movingPlayer;
            else if (typeof object.movingPlayer === "object")
                message.movingPlayer = new $util.LongBits(object.movingPlayer.low >>> 0, object.movingPlayer.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a GameComponentStack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameComponentStack
     * @static
     * @param {GameComponentStack} message GameComponentStack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameComponentStack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.members = [];
        if (options.defaults) {
            object.uuid = "";
            object.xPos = 0;
            object.yPos = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rotation = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rotation = options.longs === String ? "0" : 0;
            object.testing = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.movingPlayer = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.movingPlayer = options.longs === String ? "0" : 0;
        }
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            object.uuid = message.uuid;
        if (message.members && message.members.length) {
            object.members = [];
            for (var j = 0; j < message.members.length; ++j)
                object.members[j] = $root.GameComponent.toObject(message.members[j], options);
        }
        if (message.xPos != null && message.hasOwnProperty("xPos"))
            object.xPos = options.json && !isFinite(message.xPos) ? String(message.xPos) : message.xPos;
        if (message.yPos != null && message.hasOwnProperty("yPos"))
            object.yPos = options.json && !isFinite(message.yPos) ? String(message.yPos) : message.yPos;
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (typeof message.rotation === "number")
                object.rotation = options.longs === String ? String(message.rotation) : message.rotation;
            else
                object.rotation = options.longs === String ? $util.Long.prototype.toString.call(message.rotation) : options.longs === Number ? new $util.LongBits(message.rotation.low >>> 0, message.rotation.high >>> 0).toNumber() : message.rotation;
        if (message.testing != null && message.hasOwnProperty("testing"))
            object.testing = message.testing;
        if (message.movingPlayer != null && message.hasOwnProperty("movingPlayer"))
            if (typeof message.movingPlayer === "number")
                object.movingPlayer = options.longs === String ? String(message.movingPlayer) : message.movingPlayer;
            else
                object.movingPlayer = options.longs === String ? $util.Long.prototype.toString.call(message.movingPlayer) : options.longs === Number ? new $util.LongBits(message.movingPlayer.low >>> 0, message.movingPlayer.high >>> 0).toNumber() : message.movingPlayer;
        return object;
    };

    /**
     * Converts this GameComponentStack to JSON.
     * @function toJSON
     * @memberof GameComponentStack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameComponentStack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GameComponentStack;
})();

$root.Player = (function() {

    /**
     * Properties of a Player.
     * @exports IPlayer
     * @interface IPlayer
     * @property {number|Long|null} [number] Player number
     * @property {number|null} [xPos] Player xPos
     * @property {number|null} [yPos] Player yPos
     * @property {number|Long|null} [rotation] Player rotation
     * @property {string|null} [name] Player name
     */

    /**
     * Constructs a new Player.
     * @exports Player
     * @classdesc Represents a Player.
     * @implements IPlayer
     * @constructor
     * @param {IPlayer=} [properties] Properties to set
     */
    function Player(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Player number.
     * @member {number|Long} number
     * @memberof Player
     * @instance
     */
    Player.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Player xPos.
     * @member {number} xPos
     * @memberof Player
     * @instance
     */
    Player.prototype.xPos = 0;

    /**
     * Player yPos.
     * @member {number} yPos
     * @memberof Player
     * @instance
     */
    Player.prototype.yPos = 0;

    /**
     * Player rotation.
     * @member {number|Long} rotation
     * @memberof Player
     * @instance
     */
    Player.prototype.rotation = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Player name.
     * @member {string} name
     * @memberof Player
     * @instance
     */
    Player.prototype.name = "";

    /**
     * Creates a new Player instance using the specified properties.
     * @function create
     * @memberof Player
     * @static
     * @param {IPlayer=} [properties] Properties to set
     * @returns {Player} Player instance
     */
    Player.create = function create(properties) {
        return new Player(properties);
    };

    /**
     * Encodes the specified Player message. Does not implicitly {@link Player.verify|verify} messages.
     * @function encode
     * @memberof Player
     * @static
     * @param {IPlayer} message Player message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Player.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.number != null && message.hasOwnProperty("number"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.number);
        if (message.xPos != null && message.hasOwnProperty("xPos"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.xPos);
        if (message.yPos != null && message.hasOwnProperty("yPos"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.yPos);
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.rotation);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified Player message, length delimited. Does not implicitly {@link Player.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Player
     * @static
     * @param {IPlayer} message Player message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Player.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Player message from the specified reader or buffer.
     * @function decode
     * @memberof Player
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Player} Player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Player.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Player();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.number = reader.int64();
                break;
            case 2:
                message.xPos = reader.float();
                break;
            case 3:
                message.yPos = reader.float();
                break;
            case 4:
                message.rotation = reader.int64();
                break;
            case 5:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Player message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Player
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Player} Player
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Player.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Player message.
     * @function verify
     * @memberof Player
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Player.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.number != null && message.hasOwnProperty("number"))
            if (!$util.isInteger(message.number) && !(message.number && $util.isInteger(message.number.low) && $util.isInteger(message.number.high)))
                return "number: integer|Long expected";
        if (message.xPos != null && message.hasOwnProperty("xPos"))
            if (typeof message.xPos !== "number")
                return "xPos: number expected";
        if (message.yPos != null && message.hasOwnProperty("yPos"))
            if (typeof message.yPos !== "number")
                return "yPos: number expected";
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (!$util.isInteger(message.rotation) && !(message.rotation && $util.isInteger(message.rotation.low) && $util.isInteger(message.rotation.high)))
                return "rotation: integer|Long expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a Player message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Player
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Player} Player
     */
    Player.fromObject = function fromObject(object) {
        if (object instanceof $root.Player)
            return object;
        var message = new $root.Player();
        if (object.number != null)
            if ($util.Long)
                (message.number = $util.Long.fromValue(object.number)).unsigned = false;
            else if (typeof object.number === "string")
                message.number = parseInt(object.number, 10);
            else if (typeof object.number === "number")
                message.number = object.number;
            else if (typeof object.number === "object")
                message.number = new $util.LongBits(object.number.low >>> 0, object.number.high >>> 0).toNumber();
        if (object.xPos != null)
            message.xPos = Number(object.xPos);
        if (object.yPos != null)
            message.yPos = Number(object.yPos);
        if (object.rotation != null)
            if ($util.Long)
                (message.rotation = $util.Long.fromValue(object.rotation)).unsigned = false;
            else if (typeof object.rotation === "string")
                message.rotation = parseInt(object.rotation, 10);
            else if (typeof object.rotation === "number")
                message.rotation = object.rotation;
            else if (typeof object.rotation === "object")
                message.rotation = new $util.LongBits(object.rotation.low >>> 0, object.rotation.high >>> 0).toNumber();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a Player message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Player
     * @static
     * @param {Player} message Player
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Player.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.number = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.number = options.longs === String ? "0" : 0;
            object.xPos = 0;
            object.yPos = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.rotation = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.rotation = options.longs === String ? "0" : 0;
            object.name = "";
        }
        if (message.number != null && message.hasOwnProperty("number"))
            if (typeof message.number === "number")
                object.number = options.longs === String ? String(message.number) : message.number;
            else
                object.number = options.longs === String ? $util.Long.prototype.toString.call(message.number) : options.longs === Number ? new $util.LongBits(message.number.low >>> 0, message.number.high >>> 0).toNumber() : message.number;
        if (message.xPos != null && message.hasOwnProperty("xPos"))
            object.xPos = options.json && !isFinite(message.xPos) ? String(message.xPos) : message.xPos;
        if (message.yPos != null && message.hasOwnProperty("yPos"))
            object.yPos = options.json && !isFinite(message.yPos) ? String(message.yPos) : message.yPos;
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (typeof message.rotation === "number")
                object.rotation = options.longs === String ? String(message.rotation) : message.rotation;
            else
                object.rotation = options.longs === String ? $util.Long.prototype.toString.call(message.rotation) : options.longs === Number ? new $util.LongBits(message.rotation.low >>> 0, message.rotation.high >>> 0).toNumber() : message.rotation;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this Player to JSON.
     * @function toJSON
     * @memberof Player
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Player.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Player;
})();

$root.Table = (function() {

    /**
     * Properties of a Table.
     * @exports ITable
     * @interface ITable
     * @property {string|null} [boardName] Table boardName
     * @property {number|null} [width] Table width
     * @property {number|null} [height] Table height
     * @property {Array.<IGameComponentStack>|null} [stacks] Table stacks
     * @property {Array.<IGameComponent>|null} [components] Table components
     * @property {Array.<IPlayer>|null} [players] Table players
     * @property {boolean|null} [hideGrid] Table hideGrid
     */

    /**
     * Constructs a new Table.
     * @exports Table
     * @classdesc Represents a Table.
     * @implements ITable
     * @constructor
     * @param {ITable=} [properties] Properties to set
     */
    function Table(properties) {
        this.stacks = [];
        this.components = [];
        this.players = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Table boardName.
     * @member {string} boardName
     * @memberof Table
     * @instance
     */
    Table.prototype.boardName = "";

    /**
     * Table width.
     * @member {number} width
     * @memberof Table
     * @instance
     */
    Table.prototype.width = 0;

    /**
     * Table height.
     * @member {number} height
     * @memberof Table
     * @instance
     */
    Table.prototype.height = 0;

    /**
     * Table stacks.
     * @member {Array.<IGameComponentStack>} stacks
     * @memberof Table
     * @instance
     */
    Table.prototype.stacks = $util.emptyArray;

    /**
     * Table components.
     * @member {Array.<IGameComponent>} components
     * @memberof Table
     * @instance
     */
    Table.prototype.components = $util.emptyArray;

    /**
     * Table players.
     * @member {Array.<IPlayer>} players
     * @memberof Table
     * @instance
     */
    Table.prototype.players = $util.emptyArray;

    /**
     * Table hideGrid.
     * @member {boolean} hideGrid
     * @memberof Table
     * @instance
     */
    Table.prototype.hideGrid = false;

    /**
     * Creates a new Table instance using the specified properties.
     * @function create
     * @memberof Table
     * @static
     * @param {ITable=} [properties] Properties to set
     * @returns {Table} Table instance
     */
    Table.create = function create(properties) {
        return new Table(properties);
    };

    /**
     * Encodes the specified Table message. Does not implicitly {@link Table.verify|verify} messages.
     * @function encode
     * @memberof Table
     * @static
     * @param {ITable} message Table message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Table.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.boardName != null && message.hasOwnProperty("boardName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.boardName);
        if (message.width != null && message.hasOwnProperty("width"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.width);
        if (message.height != null && message.hasOwnProperty("height"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.height);
        if (message.stacks != null && message.stacks.length)
            for (var i = 0; i < message.stacks.length; ++i)
                $root.GameComponentStack.encode(message.stacks[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.components != null && message.components.length)
            for (var i = 0; i < message.components.length; ++i)
                $root.GameComponent.encode(message.components[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.players != null && message.players.length)
            for (var i = 0; i < message.players.length; ++i)
                $root.Player.encode(message.players[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.hideGrid != null && message.hasOwnProperty("hideGrid"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.hideGrid);
        return writer;
    };

    /**
     * Encodes the specified Table message, length delimited. Does not implicitly {@link Table.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Table
     * @static
     * @param {ITable} message Table message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Table.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Table message from the specified reader or buffer.
     * @function decode
     * @memberof Table
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Table} Table
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Table.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Table();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.boardName = reader.string();
                break;
            case 2:
                message.width = reader.float();
                break;
            case 3:
                message.height = reader.float();
                break;
            case 4:
                if (!(message.stacks && message.stacks.length))
                    message.stacks = [];
                message.stacks.push($root.GameComponentStack.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.components && message.components.length))
                    message.components = [];
                message.components.push($root.GameComponent.decode(reader, reader.uint32()));
                break;
            case 6:
                if (!(message.players && message.players.length))
                    message.players = [];
                message.players.push($root.Player.decode(reader, reader.uint32()));
                break;
            case 10:
                message.hideGrid = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Table message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Table
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Table} Table
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Table.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Table message.
     * @function verify
     * @memberof Table
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Table.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.boardName != null && message.hasOwnProperty("boardName"))
            if (!$util.isString(message.boardName))
                return "boardName: string expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (typeof message.width !== "number")
                return "width: number expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (typeof message.height !== "number")
                return "height: number expected";
        if (message.stacks != null && message.hasOwnProperty("stacks")) {
            if (!Array.isArray(message.stacks))
                return "stacks: array expected";
            for (var i = 0; i < message.stacks.length; ++i) {
                var error = $root.GameComponentStack.verify(message.stacks[i]);
                if (error)
                    return "stacks." + error;
            }
        }
        if (message.components != null && message.hasOwnProperty("components")) {
            if (!Array.isArray(message.components))
                return "components: array expected";
            for (var i = 0; i < message.components.length; ++i) {
                var error = $root.GameComponent.verify(message.components[i]);
                if (error)
                    return "components." + error;
            }
        }
        if (message.players != null && message.hasOwnProperty("players")) {
            if (!Array.isArray(message.players))
                return "players: array expected";
            for (var i = 0; i < message.players.length; ++i) {
                var error = $root.Player.verify(message.players[i]);
                if (error)
                    return "players." + error;
            }
        }
        if (message.hideGrid != null && message.hasOwnProperty("hideGrid"))
            if (typeof message.hideGrid !== "boolean")
                return "hideGrid: boolean expected";
        return null;
    };

    /**
     * Creates a Table message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Table
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Table} Table
     */
    Table.fromObject = function fromObject(object) {
        if (object instanceof $root.Table)
            return object;
        var message = new $root.Table();
        if (object.boardName != null)
            message.boardName = String(object.boardName);
        if (object.width != null)
            message.width = Number(object.width);
        if (object.height != null)
            message.height = Number(object.height);
        if (object.stacks) {
            if (!Array.isArray(object.stacks))
                throw TypeError(".Table.stacks: array expected");
            message.stacks = [];
            for (var i = 0; i < object.stacks.length; ++i) {
                if (typeof object.stacks[i] !== "object")
                    throw TypeError(".Table.stacks: object expected");
                message.stacks[i] = $root.GameComponentStack.fromObject(object.stacks[i]);
            }
        }
        if (object.components) {
            if (!Array.isArray(object.components))
                throw TypeError(".Table.components: array expected");
            message.components = [];
            for (var i = 0; i < object.components.length; ++i) {
                if (typeof object.components[i] !== "object")
                    throw TypeError(".Table.components: object expected");
                message.components[i] = $root.GameComponent.fromObject(object.components[i]);
            }
        }
        if (object.players) {
            if (!Array.isArray(object.players))
                throw TypeError(".Table.players: array expected");
            message.players = [];
            for (var i = 0; i < object.players.length; ++i) {
                if (typeof object.players[i] !== "object")
                    throw TypeError(".Table.players: object expected");
                message.players[i] = $root.Player.fromObject(object.players[i]);
            }
        }
        if (object.hideGrid != null)
            message.hideGrid = Boolean(object.hideGrid);
        return message;
    };

    /**
     * Creates a plain object from a Table message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Table
     * @static
     * @param {Table} message Table
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Table.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.stacks = [];
            object.components = [];
            object.players = [];
        }
        if (options.defaults) {
            object.boardName = "";
            object.width = 0;
            object.height = 0;
            object.hideGrid = false;
        }
        if (message.boardName != null && message.hasOwnProperty("boardName"))
            object.boardName = message.boardName;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
        if (message.stacks && message.stacks.length) {
            object.stacks = [];
            for (var j = 0; j < message.stacks.length; ++j)
                object.stacks[j] = $root.GameComponentStack.toObject(message.stacks[j], options);
        }
        if (message.components && message.components.length) {
            object.components = [];
            for (var j = 0; j < message.components.length; ++j)
                object.components[j] = $root.GameComponent.toObject(message.components[j], options);
        }
        if (message.players && message.players.length) {
            object.players = [];
            for (var j = 0; j < message.players.length; ++j)
                object.players[j] = $root.Player.toObject(message.players[j], options);
        }
        if (message.hideGrid != null && message.hasOwnProperty("hideGrid"))
            object.hideGrid = message.hideGrid;
        return object;
    };

    /**
     * Converts this Table to JSON.
     * @function toJSON
     * @memberof Table
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Table.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Table;
})();

module.exports = $root;
