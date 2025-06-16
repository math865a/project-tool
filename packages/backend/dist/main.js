/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const db_init_module_1 = __webpack_require__(/*! @/libs/db-initializer/db_init.module */ "./src/libs/db-initializer/db_init.module.ts");
const cqrs_1 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
const resource_management_1 = __webpack_require__(/*! ./resource-management */ "./src/app/resource-management/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const monitoring_1 = __webpack_require__(/*! ./monitoring */ "./src/app/monitoring/index.ts");
const organization_module_1 = __webpack_require__(/*! ./organization/organization.module */ "./src/app/organization/organization.module.ts");
const project_management_1 = __webpack_require__(/*! ./project-management */ "./src/app/project-management/index.ts");
const scheduling_module_1 = __webpack_require__(/*! ./scheduling/scheduling.module */ "./src/app/scheduling/scheduling.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            cqrs_1.CQRSModule,
            neo4j_1.Neo4jModule,
            monitoring_1.MonitoringModule,
            db_init_module_1.DBInitModule,
            organization_module_1.OrganizationModule,
            resource_management_1.ResourceManagementModule,
            project_management_1.ProjectManagementModule,
            scheduling_module_1.SchedulingModule,
        ],
        controllers: [],
    })
], AppModule);


/***/ }),

/***/ "./src/app/monitoring/event-logger.service.ts":
/*!****************************************************!*\
  !*** ./src/app/monitoring/event-logger.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventLoggerService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const mongodb_1 = __webpack_require__(/*! @/libs/mongodb */ "./src/libs/mongodb/index.ts");
const mongodb_2 = __webpack_require__(/*! mongodb */ "mongodb");
let EventLoggerService = class EventLoggerService {
    constructor(eventEmitter, db) {
        this.eventEmitter = eventEmitter;
        this.db = db;
    }
    onModuleInit() {
        this.eventEmitter.onAny((eventName, value) => {
            console.log('Received event:', eventName);
            this.persistEvent(value);
        });
    }
    async persistEvent(value) {
        const doc = {
            _id: new mongodb_2.ObjectId(),
            ...value,
        };
        await this.db.events.insertOne(doc);
    }
};
exports.EventLoggerService = EventLoggerService;
exports.EventLoggerService = EventLoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _a : Object, typeof (_b = typeof mongodb_1.MongoClient !== "undefined" && mongodb_1.MongoClient) === "function" ? _b : Object])
], EventLoggerService);


/***/ }),

/***/ "./src/app/monitoring/index.ts":
/*!*************************************!*\
  !*** ./src/app/monitoring/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./montoring.module */ "./src/app/monitoring/montoring.module.ts"), exports);


/***/ }),

/***/ "./src/app/monitoring/montoring.module.ts":
/*!************************************************!*\
  !*** ./src/app/monitoring/montoring.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MonitoringModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_logger_service_1 = __webpack_require__(/*! ./event-logger.service */ "./src/app/monitoring/event-logger.service.ts");
const mongodb_1 = __webpack_require__(/*! @/libs/mongodb */ "./src/libs/mongodb/index.ts");
let MonitoringModule = class MonitoringModule {
};
exports.MonitoringModule = MonitoringModule;
exports.MonitoringModule = MonitoringModule = __decorate([
    (0, common_1.Module)({
        imports: [mongodb_1.MongoModule],
        providers: [event_logger_service_1.EventLoggerService],
    })
], MonitoringModule);


/***/ }),

/***/ "./src/app/organization/contracts/commands/create-contract/create-contract.command.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/organization/contracts/commands/create-contract/create-contract.command.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateContractCommand = void 0;
class CreateContractCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateContractCommand = CreateContractCommand;


/***/ }),

/***/ "./src/app/organization/contracts/commands/create-contract/create-contract.handler.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/organization/contracts/commands/create-contract/create-contract.handler.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateContractHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_contract_command_1 = __webpack_require__(/*! ./create-contract.command */ "./src/app/organization/contracts/commands/create-contract/create-contract.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const queries_1 = __webpack_require__(/*! ../../queries */ "./src/app/organization/contracts/queries/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let CreateContractHandler = class CreateContractHandler {
    constructor(client, validate, publisher) {
        this.client = client;
        this.validate = validate;
        this.publisher = publisher;
        this.query = `
       MATCH (u:User {uid: $uid})
       CREATE (c:Contract {
            id: apoc.create.uuid(),
            name: $name,
            abbrevation: $abbrevation
        })
        MERGE (c)-[r:CREATED_BY {timestamp: datetime()}]->(u)
        RETURN c.id AS id
   `;
    }
    async execute(command) {
        const isValid = await this.validate.execute(new queries_1.ValidateContractQuery(command.dto.name, command.dto.abbrevation));
        if (!isValid) {
            return new _shared_1.FormErrorResponse({
                message: 'En kontrakt med samme navn eller forkortelse eksisterer allerede',
            });
        }
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const contractId = queryResult.records[0]?.get('id');
        if (contractId) {
            this.publisher.publish({ ...command.dto, uid: command.uid, type: 'contract.created' });
            return new _shared_1.FormSuccessResponse({ id: contractId });
        }
        return new _shared_1.FormErrorResponse({ message: 'Noget gik galt.' });
    }
};
exports.CreateContractHandler = CreateContractHandler;
exports.CreateContractHandler = CreateContractHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_contract_command_1.CreateContractCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof queries_1.ValidateContractHandler !== "undefined" && queries_1.ValidateContractHandler) === "function" ? _b : Object, typeof (_c = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _c : Object])
], CreateContractHandler);


/***/ }),

/***/ "./src/app/organization/contracts/commands/create-contract/index.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organization/contracts/commands/create-contract/index.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-contract.command */ "./src/app/organization/contracts/commands/create-contract/create-contract.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-contract.handler */ "./src/app/organization/contracts/commands/create-contract/create-contract.handler.ts"), exports);


/***/ }),

/***/ "./src/app/organization/contracts/commands/delete-contract/delete-contract.command.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/organization/contracts/commands/delete-contract/delete-contract.command.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteContractCommand = void 0;
class DeleteContractCommand {
    constructor(id, uid) {
        this.id = id;
        this.uid = uid;
    }
}
exports.DeleteContractCommand = DeleteContractCommand;


/***/ }),

/***/ "./src/app/organization/contracts/commands/delete-contract/delete-contract.handler.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/organization/contracts/commands/delete-contract/delete-contract.handler.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteContractHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const delete_contract_command_1 = __webpack_require__(/*! ./delete-contract.command */ "./src/app/organization/contracts/commands/delete-contract/delete-contract.command.ts");
let DeleteContractHandler = class DeleteContractHandler {
    async execute(command) {
        throw new Error("Method not implemented.");
    }
};
exports.DeleteContractHandler = DeleteContractHandler;
exports.DeleteContractHandler = DeleteContractHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_contract_command_1.DeleteContractCommand)
], DeleteContractHandler);


/***/ }),

/***/ "./src/app/organization/contracts/commands/delete-contract/index.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organization/contracts/commands/delete-contract/index.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./delete-contract.command */ "./src/app/organization/contracts/commands/delete-contract/delete-contract.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-contract.handler */ "./src/app/organization/contracts/commands/delete-contract/delete-contract.handler.ts"), exports);


/***/ }),

/***/ "./src/app/organization/contracts/commands/handlers.ts":
/*!*************************************************************!*\
  !*** ./src/app/organization/contracts/commands/handlers.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commandHandlers = void 0;
const create_contract_1 = __webpack_require__(/*! ./create-contract */ "./src/app/organization/contracts/commands/create-contract/index.ts");
const delete_contract_1 = __webpack_require__(/*! ./delete-contract */ "./src/app/organization/contracts/commands/delete-contract/index.ts");
const update_contract_1 = __webpack_require__(/*! ./update-contract */ "./src/app/organization/contracts/commands/update-contract/index.ts");
exports.commandHandlers = [create_contract_1.CreateContractHandler, delete_contract_1.DeleteContractHandler, update_contract_1.UpdateContractHandler];


/***/ }),

/***/ "./src/app/organization/contracts/commands/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/organization/contracts/commands/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/organization/contracts/commands/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-contract */ "./src/app/organization/contracts/commands/create-contract/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-contract */ "./src/app/organization/contracts/commands/delete-contract/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-contract */ "./src/app/organization/contracts/commands/update-contract/index.ts"), exports);


/***/ }),

/***/ "./src/app/organization/contracts/commands/update-contract/index.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organization/contracts/commands/update-contract/index.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-contract.command */ "./src/app/organization/contracts/commands/update-contract/update-contract.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-contract.handler */ "./src/app/organization/contracts/commands/update-contract/update-contract.handler.ts"), exports);


/***/ }),

/***/ "./src/app/organization/contracts/commands/update-contract/update-contract.command.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/organization/contracts/commands/update-contract/update-contract.command.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateContractCommand = void 0;
class UpdateContractCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateContractCommand = UpdateContractCommand;


/***/ }),

/***/ "./src/app/organization/contracts/commands/update-contract/update-contract.handler.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/organization/contracts/commands/update-contract/update-contract.handler.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateContractHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_contract_command_1 = __webpack_require__(/*! ./update-contract.command */ "./src/app/organization/contracts/commands/update-contract/update-contract.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const queries_1 = __webpack_require__(/*! ../../queries */ "./src/app/organization/contracts/queries/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdateContractHandler = class UpdateContractHandler {
    constructor(client, validate, publisher) {
        this.client = client;
        this.validate = validate;
        this.publisher = publisher;
        this.query = `
        MATCH (c:Contract)
            WHERE c.id = $contractId
        SET c += {
            name: $name,
            abbrevation: $abbrevation
        }
        RETURN {} AS result
   `;
    }
    async execute(command) {
        const isValid = await this.validate.execute(new queries_1.ValidateContractQuery(command.dto.name, command.dto.abbrevation, command.dto.contractId));
        if (!isValid) {
            return new _shared_1.FormErrorResponse({
                message: 'En kontrakt med samme navn eller forkortelse eksisterer allerede',
            });
        }
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({ ...command.dto, uid: command.uid, type: 'contract.updated' });
            return new _shared_1.FormSuccessResponse({
                message: 'Kontrakten blev opdateret.',
            });
        }
        return new _shared_1.FormErrorResponse({ message: 'Noget gik galt.' });
    }
};
exports.UpdateContractHandler = UpdateContractHandler;
exports.UpdateContractHandler = UpdateContractHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_contract_command_1.UpdateContractCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof queries_1.ValidateContractHandler !== "undefined" && queries_1.ValidateContractHandler) === "function" ? _b : Object, typeof (_c = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _c : Object])
], UpdateContractHandler);


/***/ }),

/***/ "./src/app/organization/contracts/contracts.controller.ts":
/*!****************************************************************!*\
  !*** ./src/app/organization/contracts/contracts.controller.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContractsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/organization/contracts/queries/index.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const util_1 = __webpack_require__(/*! @/libs/util */ "./src/libs/util/index.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/organization/contracts/commands/index.ts");
let ContractsController = class ContractsController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async getContractOptions() {
        return await this.queryBus.execute(new queries_1.ContractOptionsQuery());
    }
    async getContractsView() {
        return await this.queryBus.execute(new queries_1.ContractsViewQuery());
    }
    async getContractProfile(contractId) {
        return await this.queryBus.execute(new queries_1.ContractProfileQuery(contractId));
    }
    async createContract(dto, uid) {
        return await this.commandBus.execute(new commands_1.CreateContractCommand(dto, uid));
    }
    async updateContract(id, dto, uid) {
        return await this.commandBus.execute(new commands_1.UpdateContractCommand({ ...dto, contractId: id }, uid));
    }
};
exports.ContractsController = ContractsController;
__decorate([
    (0, common_1.Get)('options'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ContractsController.prototype, "getContractOptions", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ContractsController.prototype, "getContractsView", null);
__decorate([
    (0, common_1.Get)(':contractId'),
    __param(0, (0, common_1.Param)('contractId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "getContractProfile", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof _shared_1.CreateContractDto !== "undefined" && _shared_1.CreateContractDto) === "function" ? _e : Object, String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "createContract", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof Omit !== "undefined" && Omit) === "function" ? _f : Object, String]),
    __metadata("design:returntype", Promise)
], ContractsController.prototype, "updateContract", null);
exports.ContractsController = ContractsController = __decorate([
    (0, common_1.Controller)('contracts'),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], ContractsController);


/***/ }),

/***/ "./src/app/organization/contracts/contracts.module.ts":
/*!************************************************************!*\
  !*** ./src/app/organization/contracts/contracts.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContractsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const contracts_controller_1 = __webpack_require__(/*! ./contracts.controller */ "./src/app/organization/contracts/contracts.controller.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/organization/contracts/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/organization/contracts/queries/index.ts");
let ContractsModule = class ContractsModule {
};
exports.ContractsModule = ContractsModule;
exports.ContractsModule = ContractsModule = __decorate([
    (0, common_1.Module)({
        providers: [...commands_1.commandHandlers, ...queries_1.queryHandlers],
        controllers: [contracts_controller_1.ContractsController],
    })
], ContractsModule);


/***/ }),

/***/ "./src/app/organization/contracts/index.ts":
/*!*************************************************!*\
  !*** ./src/app/organization/contracts/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./contracts.module */ "./src/app/organization/contracts/contracts.module.ts"), exports);


/***/ }),

/***/ "./src/app/organization/contracts/queries/contract-options/contract-options.handler.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/contract-options/contract-options.handler.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContractOptionsHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const contract_options_query_1 = __webpack_require__(/*! ./contract-options.query */ "./src/app/organization/contracts/queries/contract-options/contract-options.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ContractOptionsHandler = class ContractOptionsHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (c:Contract)
        RETURN {
            value: c.id,
            label: c.name
        } AS option
    `;
    }
    async execute() {
        const result = await this.client.read(this.query);
        return result.records?.map((record) => record.get("option")) ?? [];
    }
};
exports.ContractOptionsHandler = ContractOptionsHandler;
exports.ContractOptionsHandler = ContractOptionsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(contract_options_query_1.ContractOptionsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ContractOptionsHandler);


/***/ }),

/***/ "./src/app/organization/contracts/queries/contract-options/contract-options.query.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/contract-options/contract-options.query.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContractOptionsQuery = void 0;
class ContractOptionsQuery {
}
exports.ContractOptionsQuery = ContractOptionsQuery;


/***/ }),

/***/ "./src/app/organization/contracts/queries/contract-options/index.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/contract-options/index.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./contract-options.handler */ "./src/app/organization/contracts/queries/contract-options/contract-options.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./contract-options.query */ "./src/app/organization/contracts/queries/contract-options/contract-options.query.ts"), exports);


/***/ }),

/***/ "./src/app/organization/contracts/queries/contract-profile/contract-profile.handler.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/contract-profile/contract-profile.handler.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContractProfileQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const contract_profile_query_1 = __webpack_require__(/*! ./contract-profile.query */ "./src/app/organization/contracts/queries/contract-profile/contract-profile.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ContractProfileQueryHandler = class ContractProfileQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (c:Contract)
            WHERE c.id = $contractId
        CALL {
            WITH c
            OPTIONAL MATCH (c)--(rt:ResourceType)
            WITH collect(rt{.*}) AS resourcetypesArr
            RETURN CASE
                WHEN resourcetypesArr[0].id IS NULL
                    THEN []
                ELSE resourcetypesArr
            END AS resourceTypes
        }
        RETURN {
            node: c{.*},
            resourceTypes: resourceTypes
        } AS result
   `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, {
            contractId: query.contractId,
        });
        return queryResult.records[0].get('result');
    }
};
exports.ContractProfileQueryHandler = ContractProfileQueryHandler;
exports.ContractProfileQueryHandler = ContractProfileQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(contract_profile_query_1.ContractProfileQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ContractProfileQueryHandler);


/***/ }),

/***/ "./src/app/organization/contracts/queries/contract-profile/contract-profile.query.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/contract-profile/contract-profile.query.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContractProfileQuery = void 0;
class ContractProfileQuery {
    constructor(contractId) {
        this.contractId = contractId;
    }
}
exports.ContractProfileQuery = ContractProfileQuery;


/***/ }),

/***/ "./src/app/organization/contracts/queries/contract-profile/index.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/contract-profile/index.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./contract-profile.handler */ "./src/app/organization/contracts/queries/contract-profile/contract-profile.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./contract-profile.query */ "./src/app/organization/contracts/queries/contract-profile/contract-profile.query.ts"), exports);


/***/ }),

/***/ "./src/app/organization/contracts/queries/contracts-view/contracts-view.handler.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/contracts-view/contracts-view.handler.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContractViewQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const contracts_view_query_1 = __webpack_require__(/*! ./contracts-view.query */ "./src/app/organization/contracts/queries/contracts-view/contracts-view.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ContractViewQueryHandler = class ContractViewQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (contracts:Contract)
        
        UNWIND contracts AS c
            CALL {
                WITH c
                OPTIONAL MATCH (c)<-[:IS_AGREED_UNDER]-(rt:ResourceType)
                WITH count(rt) AS resourceTypeCount
                RETURN resourceTypeCount
            }
            
            CALL {
                WITH c
                OPTIONAL MATCH (c)<-[:IS_UNDER]-(w:Workpackage)
                WITH count(w) AS workpackageCount
                RETURN workpackageCount
            }
        RETURN {
            id: c.id,
            node: c{.*},
            resourceTypeCount: resourceTypeCount,
            workpackageCount: workpackageCount
        } AS row
            ORDER BY row.node.name
   `;
    }
    async execute() {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('row'));
    }
};
exports.ContractViewQueryHandler = ContractViewQueryHandler;
exports.ContractViewQueryHandler = ContractViewQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(contracts_view_query_1.ContractsViewQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ContractViewQueryHandler);


/***/ }),

/***/ "./src/app/organization/contracts/queries/contracts-view/contracts-view.query.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/contracts-view/contracts-view.query.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContractsViewQuery = void 0;
class ContractsViewQuery {
    constructor() { }
}
exports.ContractsViewQuery = ContractsViewQuery;


/***/ }),

/***/ "./src/app/organization/contracts/queries/contracts-view/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/contracts-view/index.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./contracts-view.query */ "./src/app/organization/contracts/queries/contracts-view/contracts-view.query.ts"), exports);
__exportStar(__webpack_require__(/*! ./contracts-view.handler */ "./src/app/organization/contracts/queries/contracts-view/contracts-view.handler.ts"), exports);


/***/ }),

/***/ "./src/app/organization/contracts/queries/handlers.ts":
/*!************************************************************!*\
  !*** ./src/app/organization/contracts/queries/handlers.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const contract_options_1 = __webpack_require__(/*! ./contract-options */ "./src/app/organization/contracts/queries/contract-options/index.ts");
const contract_profile_1 = __webpack_require__(/*! ./contract-profile */ "./src/app/organization/contracts/queries/contract-profile/index.ts");
const contracts_view_1 = __webpack_require__(/*! ./contracts-view */ "./src/app/organization/contracts/queries/contracts-view/index.ts");
const validate_contract_1 = __webpack_require__(/*! ./validate-contract */ "./src/app/organization/contracts/queries/validate-contract/index.ts");
exports.queryHandlers = [contracts_view_1.ContractViewQueryHandler, contract_profile_1.ContractProfileQueryHandler, contract_options_1.ContractOptionsHandler, validate_contract_1.ValidateContractHandler];


/***/ }),

/***/ "./src/app/organization/contracts/queries/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/organization/contracts/queries/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/organization/contracts/queries/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./contract-options */ "./src/app/organization/contracts/queries/contract-options/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./contracts-view */ "./src/app/organization/contracts/queries/contracts-view/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./contract-profile */ "./src/app/organization/contracts/queries/contract-profile/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./validate-contract */ "./src/app/organization/contracts/queries/validate-contract/index.ts"), exports);


/***/ }),

/***/ "./src/app/organization/contracts/queries/validate-contract/index.ts":
/*!***************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/validate-contract/index.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./validate-contract.handler */ "./src/app/organization/contracts/queries/validate-contract/validate-contract.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./validate-contract.query */ "./src/app/organization/contracts/queries/validate-contract/validate-contract.query.ts"), exports);


/***/ }),

/***/ "./src/app/organization/contracts/queries/validate-contract/validate-contract.handler.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/validate-contract/validate-contract.handler.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateContractHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const validate_contract_query_1 = __webpack_require__(/*! ./validate-contract.query */ "./src/app/organization/contracts/queries/validate-contract/validate-contract.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ValidateContractHandler = class ValidateContractHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        OPTIONAL MATCH (c:Contract)
            WHERE (c.name = $name OR c.abbrevation = $abbrevation) 
            AND NOT c.id = $id

        RETURN CASE
            WHEN c IS NOT NULL
                THEN false
            ELSE true
        END AS isUnique

    
    `;
    }
    async execute(query) {
        const isUnique = await this.client.read(this.query, {
            name: query.name,
            abbrevation: query.abbrevation,
            id: query.id ?? 'blabla',
        });
        return isUnique.records[0].get('isUnique');
    }
};
exports.ValidateContractHandler = ValidateContractHandler;
exports.ValidateContractHandler = ValidateContractHandler = __decorate([
    (0, cqrs_1.QueryHandler)(validate_contract_query_1.ValidateContractQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ValidateContractHandler);


/***/ }),

/***/ "./src/app/organization/contracts/queries/validate-contract/validate-contract.query.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/organization/contracts/queries/validate-contract/validate-contract.query.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateContractQuery = void 0;
class ValidateContractQuery {
    constructor(name, abbrevation, id) {
        this.name = name;
        this.abbrevation = abbrevation;
        this.id = id;
    }
}
exports.ValidateContractQuery = ValidateContractQuery;


/***/ }),

/***/ "./src/app/organization/financialsources/commands/create-financialsource/create-financialsource.command.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/create-financialsource/create-financialsource.command.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFinancialSourceCommand = void 0;
class CreateFinancialSourceCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateFinancialSourceCommand = CreateFinancialSourceCommand;


/***/ }),

/***/ "./src/app/organization/financialsources/commands/create-financialsource/create-financialsource.handler.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/create-financialsource/create-financialsource.handler.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFinancialSourceHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_financialsource_command_1 = __webpack_require__(/*! ./create-financialsource.command */ "./src/app/organization/financialsources/commands/create-financialsource/create-financialsource.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const queries_1 = __webpack_require__(/*! ../../queries */ "./src/app/organization/financialsources/queries/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let CreateFinancialSourceHandler = class CreateFinancialSourceHandler {
    constructor(client, ValidateName, publisher) {
        this.client = client;
        this.ValidateName = ValidateName;
        this.publisher = publisher;
        this.query = `
        MATCH (u:User {uid: $uid})
        CREATE (f:FinancialSource {
            id: apoc.create.uuid(),
            name: $name
        })
        MERGE (f)-[r:CREATED_BY {timestamp: datetime()}]->(u)
        RETURN f.id AS id
   `;
    }
    async execute(command) {
        const exists = await this.ValidateName.execute(new queries_1.ValidateFinancialSourceNameQuery(command.dto.name));
        if (exists) {
            return new _shared_1.FormErrorResponse({
                validation: {
                    name: 'Der eksisterer allerede en finanskilde med dette navn.',
                },
            });
        }
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        this.publisher.publish({
            ...command.dto,
            uid: command.uid,
            type: 'financialsource.created',
        });
        return new _shared_1.FormSuccessResponse({
            id: queryResult.records[0].get('id'),
        });
    }
};
exports.CreateFinancialSourceHandler = CreateFinancialSourceHandler;
exports.CreateFinancialSourceHandler = CreateFinancialSourceHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_financialsource_command_1.CreateFinancialSourceCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof queries_1.ValidateFinancialSourceNameQueryHandler !== "undefined" && queries_1.ValidateFinancialSourceNameQueryHandler) === "function" ? _b : Object, typeof (_c = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _c : Object])
], CreateFinancialSourceHandler);


/***/ }),

/***/ "./src/app/organization/financialsources/commands/create-financialsource/index.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/create-financialsource/index.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-financialsource.command */ "./src/app/organization/financialsources/commands/create-financialsource/create-financialsource.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-financialsource.handler */ "./src/app/organization/financialsources/commands/create-financialsource/create-financialsource.handler.ts"), exports);


/***/ }),

/***/ "./src/app/organization/financialsources/commands/delete-financialsource/delete-financialsource.command.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/delete-financialsource/delete-financialsource.command.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteFinancialSourceCommand = void 0;
class DeleteFinancialSourceCommand {
    constructor(financialSourceId, uid) {
        this.financialSourceId = financialSourceId;
        this.uid = uid;
    }
}
exports.DeleteFinancialSourceCommand = DeleteFinancialSourceCommand;


/***/ }),

/***/ "./src/app/organization/financialsources/commands/delete-financialsource/delete-financialsource.handler.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/delete-financialsource/delete-financialsource.handler.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteFinancialSourceHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const delete_financialsource_command_1 = __webpack_require__(/*! ./delete-financialsource.command */ "./src/app/organization/financialsources/commands/delete-financialsource/delete-financialsource.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let DeleteFinancialSourceHandler = class DeleteFinancialSourceHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (f:FinancialSource)
            WHERE f.id = $financialSourceId

        CALL {
            WITH f
            RETURN f{.*} AS financialSource
        }

        CALL {
            WITH f
            OPTIONAL MATCH (f)--(w:Workpackage)
            WITH collect(w.id) AS workpackagesToDelete
            RETURN CASE
                WHEN workpackagesToDelete[0] IS NULL
                    THEN []
                ELSE workpackagesToDelete
            END AS workpackages
        }

        CALL {
            WITH f
            DETACH DELETE f
        }

        RETURN workpackages, financialSource
    
    `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            financialSourceId: command.financialSourceId,
        });
        const financialSource = queryResult.records[0]?.get('financialSource');
        const workpackagesToDelete = queryResult.records[0]?.get('workpackages') ?? [];
        if (financialSource) {
            this.publisher.publish({ ...command, type: 'financialsource.deleted' });
            return new _shared_1.FormSuccessResponse({
                message: 'Finanskilden blev slettet',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Der skete en fejl under sletningen af finanskilden',
        });
    }
};
exports.DeleteFinancialSourceHandler = DeleteFinancialSourceHandler;
exports.DeleteFinancialSourceHandler = DeleteFinancialSourceHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_financialsource_command_1.DeleteFinancialSourceCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], DeleteFinancialSourceHandler);


/***/ }),

/***/ "./src/app/organization/financialsources/commands/delete-financialsource/index.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/delete-financialsource/index.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./delete-financialsource.command */ "./src/app/organization/financialsources/commands/delete-financialsource/delete-financialsource.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-financialsource.handler */ "./src/app/organization/financialsources/commands/delete-financialsource/delete-financialsource.handler.ts"), exports);


/***/ }),

/***/ "./src/app/organization/financialsources/commands/handler.ts":
/*!*******************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/handler.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commandHandlers = void 0;
const create_financialsource_1 = __webpack_require__(/*! ./create-financialsource */ "./src/app/organization/financialsources/commands/create-financialsource/index.ts");
const delete_financialsource_1 = __webpack_require__(/*! ./delete-financialsource */ "./src/app/organization/financialsources/commands/delete-financialsource/index.ts");
const update_financialsource_1 = __webpack_require__(/*! ./update-financialsource */ "./src/app/organization/financialsources/commands/update-financialsource/index.ts");
exports.commandHandlers = [create_financialsource_1.CreateFinancialSourceHandler, update_financialsource_1.UpdateFinancialSourceHandler, delete_financialsource_1.DeleteFinancialSourceHandler];


/***/ }),

/***/ "./src/app/organization/financialsources/commands/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/index.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handler */ "./src/app/organization/financialsources/commands/handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-financialsource */ "./src/app/organization/financialsources/commands/create-financialsource/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-financialsource */ "./src/app/organization/financialsources/commands/delete-financialsource/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-financialsource */ "./src/app/organization/financialsources/commands/update-financialsource/index.ts"), exports);


/***/ }),

/***/ "./src/app/organization/financialsources/commands/update-financialsource/index.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/update-financialsource/index.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-financialsource.handler */ "./src/app/organization/financialsources/commands/update-financialsource/update-financialsource.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-financialsource.command */ "./src/app/organization/financialsources/commands/update-financialsource/update-financialsource.command.ts"), exports);


/***/ }),

/***/ "./src/app/organization/financialsources/commands/update-financialsource/update-financialsource.command.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/update-financialsource/update-financialsource.command.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateFinancialSourceCommand = void 0;
class UpdateFinancialSourceCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateFinancialSourceCommand = UpdateFinancialSourceCommand;


/***/ }),

/***/ "./src/app/organization/financialsources/commands/update-financialsource/update-financialsource.handler.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/commands/update-financialsource/update-financialsource.handler.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateFinancialSourceHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const queries_1 = __webpack_require__(/*! ../../queries */ "./src/app/organization/financialsources/queries/index.ts");
const update_financialsource_command_1 = __webpack_require__(/*! ./update-financialsource.command */ "./src/app/organization/financialsources/commands/update-financialsource/update-financialsource.command.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdateFinancialSourceHandler = class UpdateFinancialSourceHandler {
    constructor(client, ValidateName, publisher) {
        this.client = client;
        this.ValidateName = ValidateName;
        this.publisher = publisher;
        this.query = `
        MATCH (f:FinancialSource)
            WHERE f.id = $financialSourceId
        SET f += {
            name: $name
        }
        RETURN {} AS result
   `;
    }
    async execute(command) {
        const exists = await this.ValidateName.execute(new queries_1.ValidateFinancialSourceNameQuery(command.dto.name));
        if (exists) {
            return new _shared_1.FormErrorResponse({
                validation: {
                    name: 'Der eksisterer allerede en finanskilde med dette navn.',
                },
            });
        }
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'financialsource.updated',
            });
            return new _shared_1.FormSuccessResponse({ message: 'Finanskilden blev opdateret' });
        }
        return new _shared_1.FormErrorResponse({ message: 'Der skete en fejl.' });
    }
};
exports.UpdateFinancialSourceHandler = UpdateFinancialSourceHandler;
exports.UpdateFinancialSourceHandler = UpdateFinancialSourceHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_financialsource_command_1.UpdateFinancialSourceCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof queries_1.ValidateFinancialSourceNameQueryHandler !== "undefined" && queries_1.ValidateFinancialSourceNameQueryHandler) === "function" ? _b : Object, typeof (_c = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _c : Object])
], UpdateFinancialSourceHandler);


/***/ }),

/***/ "./src/app/organization/financialsources/financialsources.controller.ts":
/*!******************************************************************************!*\
  !*** ./src/app/organization/financialsources/financialsources.controller.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinancialSourcesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/organization/financialsources/queries/index.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const util_1 = __webpack_require__(/*! @/libs/util */ "./src/libs/util/index.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/organization/financialsources/commands/index.ts");
const update_financialsource_command_1 = __webpack_require__(/*! ./commands/update-financialsource/update-financialsource.command */ "./src/app/organization/financialsources/commands/update-financialsource/update-financialsource.command.ts");
let FinancialSourcesController = class FinancialSourcesController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async getFinancialSourcesView() {
        return await this.queryBus.execute(new queries_1.FinancialSourcesViewQuery());
    }
    async getFinancialSourceOptions() {
        return await this.queryBus.execute(new queries_1.FinancialSourceOptionsQuery());
    }
    async getFinancialSourceProfile(financialSourceId) {
        return await this.queryBus.execute(new queries_1.FinancialSourceProfileQuery(financialSourceId));
    }
    async createFinancialSource(dto, uid) {
        return await this.commandBus.execute(new commands_1.CreateFinancialSourceCommand(dto, uid));
    }
    async updateFinancialSource(financialSourceId, dto, uid) {
        return await this.commandBus.execute(new update_financialsource_command_1.UpdateFinancialSourceCommand({
            ...dto,
            financialSourceId,
        }, uid));
    }
    async deleteFinancialSource(financialSourceId, uid) {
        return await this.commandBus.execute(new commands_1.DeleteFinancialSourceCommand(financialSourceId, uid));
    }
};
exports.FinancialSourcesController = FinancialSourcesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FinancialSourcesController.prototype, "getFinancialSourcesView", null);
__decorate([
    (0, common_1.Get)('options'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FinancialSourcesController.prototype, "getFinancialSourceOptions", null);
__decorate([
    (0, common_1.Get)(':financialSourceId'),
    __param(0, (0, common_1.Param)('financialSourceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FinancialSourcesController.prototype, "getFinancialSourceProfile", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof _shared_1.CreateFinancialSourceDto !== "undefined" && _shared_1.CreateFinancialSourceDto) === "function" ? _c : Object, String]),
    __metadata("design:returntype", Promise)
], FinancialSourcesController.prototype, "createFinancialSource", null);
__decorate([
    (0, common_1.Post)(':financialSourceId'),
    __param(0, (0, common_1.Param)('financialSourceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof Omit !== "undefined" && Omit) === "function" ? _d : Object, String]),
    __metadata("design:returntype", Promise)
], FinancialSourcesController.prototype, "updateFinancialSource", null);
__decorate([
    (0, common_1.Delete)(':financialSourceId'),
    __param(0, (0, common_1.Param)('financialSourceId')),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FinancialSourcesController.prototype, "deleteFinancialSource", null);
exports.FinancialSourcesController = FinancialSourcesController = __decorate([
    (0, common_1.Controller)('financialsources'),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], FinancialSourcesController);


/***/ }),

/***/ "./src/app/organization/financialsources/financialsources.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organization/financialsources/financialsources.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinancialSourcesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/organization/financialsources/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/organization/financialsources/queries/index.ts");
const financialsources_controller_1 = __webpack_require__(/*! ./financialsources.controller */ "./src/app/organization/financialsources/financialsources.controller.ts");
let FinancialSourcesModule = class FinancialSourcesModule {
};
exports.FinancialSourcesModule = FinancialSourcesModule;
exports.FinancialSourcesModule = FinancialSourcesModule = __decorate([
    (0, common_1.Module)({
        providers: [...commands_1.commandHandlers, ...queries_1.queryHandlers],
        controllers: [financialsources_controller_1.FinancialSourcesController],
    })
], FinancialSourcesModule);


/***/ }),

/***/ "./src/app/organization/financialsources/index.ts":
/*!********************************************************!*\
  !*** ./src/app/organization/financialsources/index.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./financialsources.module */ "./src/app/organization/financialsources/financialsources.module.ts"), exports);


/***/ }),

/***/ "./src/app/organization/financialsources/queries/financialsource-options/financialsource-options.handler.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/financialsource-options/financialsource-options.handler.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinancialSourceOptionsQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const financialsource_options_query_1 = __webpack_require__(/*! ./financialsource-options.query */ "./src/app/organization/financialsources/queries/financialsource-options/financialsource-options.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let FinancialSourceOptionsQueryHandler = class FinancialSourceOptionsQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (f:FinancialSource)
        RETURN {
            id: f.id,
            name: f.name
        } AS option
    `;
    }
    async execute() {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('option'));
    }
};
exports.FinancialSourceOptionsQueryHandler = FinancialSourceOptionsQueryHandler;
exports.FinancialSourceOptionsQueryHandler = FinancialSourceOptionsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(financialsource_options_query_1.FinancialSourceOptionsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], FinancialSourceOptionsQueryHandler);


/***/ }),

/***/ "./src/app/organization/financialsources/queries/financialsource-options/financialsource-options.query.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/financialsource-options/financialsource-options.query.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinancialSourceOptionsQuery = void 0;
class FinancialSourceOptionsQuery {
}
exports.FinancialSourceOptionsQuery = FinancialSourceOptionsQuery;


/***/ }),

/***/ "./src/app/organization/financialsources/queries/financialsource-options/index.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/financialsource-options/index.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./financialsource-options.handler */ "./src/app/organization/financialsources/queries/financialsource-options/financialsource-options.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./financialsource-options.query */ "./src/app/organization/financialsources/queries/financialsource-options/financialsource-options.query.ts"), exports);


/***/ }),

/***/ "./src/app/organization/financialsources/queries/financialsource-profile/financialsource-profile.handler.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/financialsource-profile/financialsource-profile.handler.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinancialSourceProfileQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const financialsource_profile_query_1 = __webpack_require__(/*! ./financialsource-profile.query */ "./src/app/organization/financialsources/queries/financialsource-profile/financialsource-profile.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let FinancialSourceProfileQueryHandler = class FinancialSourceProfileQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (f:FinancialSource)
            WHERE f.id = $financialSourceId
        RETURN {node: f{.*}} AS result
   `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, {
            financialSourceId: query.financialSourceId,
        });
        return queryResult.records[0].get('result');
    }
};
exports.FinancialSourceProfileQueryHandler = FinancialSourceProfileQueryHandler;
exports.FinancialSourceProfileQueryHandler = FinancialSourceProfileQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(financialsource_profile_query_1.FinancialSourceProfileQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], FinancialSourceProfileQueryHandler);


/***/ }),

/***/ "./src/app/organization/financialsources/queries/financialsource-profile/financialsource-profile.query.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/financialsource-profile/financialsource-profile.query.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinancialSourceProfileQuery = void 0;
class FinancialSourceProfileQuery {
    constructor(financialSourceId) {
        this.financialSourceId = financialSourceId;
    }
}
exports.FinancialSourceProfileQuery = FinancialSourceProfileQuery;


/***/ }),

/***/ "./src/app/organization/financialsources/queries/financialsource-profile/index.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/financialsource-profile/index.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./financialsource-profile.handler */ "./src/app/organization/financialsources/queries/financialsource-profile/financialsource-profile.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./financialsource-profile.query */ "./src/app/organization/financialsources/queries/financialsource-profile/financialsource-profile.query.ts"), exports);


/***/ }),

/***/ "./src/app/organization/financialsources/queries/financialsources-view/financialsources-view.handler.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/financialsources-view/financialsources-view.handler.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinancialSourcesViewQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const financialsources_view_query_1 = __webpack_require__(/*! ./financialsources-view.query */ "./src/app/organization/financialsources/queries/financialsources-view/financialsources-view.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let FinancialSourcesViewQueryHandler = class FinancialSourcesViewQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (f:FinancialSource)
        RETURN {node: f{.*}} as row
   `;
    }
    async execute() {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('row'));
    }
};
exports.FinancialSourcesViewQueryHandler = FinancialSourcesViewQueryHandler;
exports.FinancialSourcesViewQueryHandler = FinancialSourcesViewQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(financialsources_view_query_1.FinancialSourcesViewQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], FinancialSourcesViewQueryHandler);


/***/ }),

/***/ "./src/app/organization/financialsources/queries/financialsources-view/financialsources-view.query.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/financialsources-view/financialsources-view.query.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinancialSourcesViewQuery = void 0;
class FinancialSourcesViewQuery {
    constructor() { }
}
exports.FinancialSourcesViewQuery = FinancialSourcesViewQuery;


/***/ }),

/***/ "./src/app/organization/financialsources/queries/financialsources-view/index.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/financialsources-view/index.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./financialsources-view.handler */ "./src/app/organization/financialsources/queries/financialsources-view/financialsources-view.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./financialsources-view.query */ "./src/app/organization/financialsources/queries/financialsources-view/financialsources-view.query.ts"), exports);


/***/ }),

/***/ "./src/app/organization/financialsources/queries/handlers.ts":
/*!*******************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/handlers.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const financialsource_options_1 = __webpack_require__(/*! ./financialsource-options */ "./src/app/organization/financialsources/queries/financialsource-options/index.ts");
const financialsource_profile_1 = __webpack_require__(/*! ./financialsource-profile */ "./src/app/organization/financialsources/queries/financialsource-profile/index.ts");
const financialsources_view_1 = __webpack_require__(/*! ./financialsources-view */ "./src/app/organization/financialsources/queries/financialsources-view/index.ts");
const validate_financialsource_name_1 = __webpack_require__(/*! ./validate-financialsource-name */ "./src/app/organization/financialsources/queries/validate-financialsource-name/index.ts");
exports.queryHandlers = [
    validate_financialsource_name_1.ValidateFinancialSourceNameQueryHandler,
    financialsources_view_1.FinancialSourcesViewQueryHandler,
    financialsource_options_1.FinancialSourceOptionsQueryHandler,
    financialsource_profile_1.FinancialSourceProfileQueryHandler,
];


/***/ }),

/***/ "./src/app/organization/financialsources/queries/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/organization/financialsources/queries/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./financialsource-options */ "./src/app/organization/financialsources/queries/financialsource-options/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./financialsource-profile */ "./src/app/organization/financialsources/queries/financialsource-profile/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./financialsources-view */ "./src/app/organization/financialsources/queries/financialsources-view/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./validate-financialsource-name */ "./src/app/organization/financialsources/queries/validate-financialsource-name/index.ts"), exports);


/***/ }),

/***/ "./src/app/organization/financialsources/queries/validate-financialsource-name/index.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/validate-financialsource-name/index.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./validate-financialsource-name.handler */ "./src/app/organization/financialsources/queries/validate-financialsource-name/validate-financialsource-name.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./validate-financialsource-name.query */ "./src/app/organization/financialsources/queries/validate-financialsource-name/validate-financialsource-name.query.ts"), exports);


/***/ }),

/***/ "./src/app/organization/financialsources/queries/validate-financialsource-name/validate-financialsource-name.handler.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/validate-financialsource-name/validate-financialsource-name.handler.ts ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateFinancialSourceNameQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const validate_financialsource_name_query_1 = __webpack_require__(/*! ./validate-financialsource-name.query */ "./src/app/organization/financialsources/queries/validate-financialsource-name/validate-financialsource-name.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ValidateFinancialSourceNameQueryHandler = class ValidateFinancialSourceNameQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        OPTIONAL MATCH (f:FinancialSource)
            WHERE f.name = $name
        RETURN CASE
            WHEN f IS NOT NULL
                THEN true
            ELSE false
        END AS exists
    `;
    }
    async execute({ name }) {
        const queryResult = await this.client.read(this.query, {
            name: name,
        });
        return queryResult.records[0]?.get('exists');
    }
};
exports.ValidateFinancialSourceNameQueryHandler = ValidateFinancialSourceNameQueryHandler;
exports.ValidateFinancialSourceNameQueryHandler = ValidateFinancialSourceNameQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(validate_financialsource_name_query_1.ValidateFinancialSourceNameQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ValidateFinancialSourceNameQueryHandler);


/***/ }),

/***/ "./src/app/organization/financialsources/queries/validate-financialsource-name/validate-financialsource-name.query.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/organization/financialsources/queries/validate-financialsource-name/validate-financialsource-name.query.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateFinancialSourceNameQuery = void 0;
class ValidateFinancialSourceNameQuery {
    constructor(name) {
        this.name = name;
    }
}
exports.ValidateFinancialSourceNameQuery = ValidateFinancialSourceNameQuery;


/***/ }),

/***/ "./src/app/organization/organization.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/organization/organization.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrganizationModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const contracts_1 = __webpack_require__(/*! ./contracts */ "./src/app/organization/contracts/index.ts");
const financialsources_1 = __webpack_require__(/*! ./financialsources */ "./src/app/organization/financialsources/index.ts");
let OrganizationModule = class OrganizationModule {
};
exports.OrganizationModule = OrganizationModule;
exports.OrganizationModule = OrganizationModule = __decorate([
    (0, common_1.Module)({
        imports: [contracts_1.ContractsModule, financialsources_1.FinancialSourcesModule],
    })
], OrganizationModule);


/***/ }),

/***/ "./src/app/project-management/gantt.gateway.ts":
/*!*****************************************************!*\
  !*** ./src/app/project-management/gantt.gateway.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GanttGateway = void 0;
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const planning_service_1 = __webpack_require__(/*! ./planning/planning.service */ "./src/app/project-management/planning/planning.service.ts");
const project_manager_service_1 = __webpack_require__(/*! ./project-managers/project-manager.service */ "./src/app/project-management/project-managers/project-manager.service.ts");
const team_service_1 = __webpack_require__(/*! ./team/team.service */ "./src/app/project-management/team/team.service.ts");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const util_1 = __webpack_require__(/*! @/libs/util */ "./src/libs/util/index.ts");
let GanttGateway = class GanttGateway {
    constructor(planningService, projectManagerService, teamService) {
        this.planningService = planningService;
        this.projectManagerService = projectManagerService;
        this.teamService = teamService;
    }
    join(workpackageId, client) {
        console.log(client.handshake.headers);
        client.join(workpackageId);
    }
    async updateProjectManager(dto, uid) {
        return await this.projectManagerService.assignProjectManager(dto, uid);
    }
    async getProjectManagerOptions() {
        return await this.projectManagerService.getProjectManagerOptions();
    }
    async getTeamOptions(workpackageId) {
        return await this.teamService.getTeamOptions(workpackageId);
    }
    async addTeamMember(dto, uid) {
        return await this.teamService.addTeamMember(dto, uid);
    }
    async removeTeamMember(dto, uid) {
        return await this.teamService.removeTeamMember(dto, uid);
    }
    async swapTeamMember(dto, uid) {
        return await this.teamService.swapTeamMember(dto, uid);
    }
    async createActivity(dto, uid) {
        return await this.planningService.createActivity(dto, uid);
    }
    async deleteActivity(activityId, uid) {
        return await this.planningService.deleteActivity(activityId, uid);
    }
    async createAssignment(dto, uid) {
        return await this.planningService.createAssignment(dto, uid);
    }
    async deleteAssignment(dto, uid) {
        return await this.planningService.deleteAssignment(dto, uid);
    }
    async createAllocation(dto, uid) {
        return await this.planningService.createAllocation(dto, uid);
    }
    async updateAllocation(dto, uid) {
        return await this.planningService.updateAllocation(dto, uid);
    }
    async updatePeriod(dto, uid) {
        return await this.planningService.updatePeriod(dto, uid);
    }
    async updateActivityName(dto, uid) {
        return await this.planningService.updateActivityName(dto, uid);
    }
    async updateActivityColor(dto, uid) {
        return await this.planningService.updateActivityColor(dto, uid);
    }
};
exports.GanttGateway = GanttGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_d = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _d : Object)
], GanttGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('join'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], GanttGateway.prototype, "join", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('update:project-manager'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof _shared_1.AssignProjectManagerDto !== "undefined" && _shared_1.AssignProjectManagerDto) === "function" ? _f : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "updateProjectManager", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('get:project-manager-options'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "getProjectManagerOptions", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('get:team-options'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "getTeamOptions", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('add:teammember'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof _shared_1.AddTeamMemberDto !== "undefined" && _shared_1.AddTeamMemberDto) === "function" ? _g : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "addTeamMember", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('remove:teammember'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof _shared_1.RemoveTeamMemberDto !== "undefined" && _shared_1.RemoveTeamMemberDto) === "function" ? _h : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "removeTeamMember", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('swap:teammember'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof _shared_1.SwapTeamMemberDto !== "undefined" && _shared_1.SwapTeamMemberDto) === "function" ? _j : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "swapTeamMember", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('create:activity'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof _shared_1.CreateActivityDto !== "undefined" && _shared_1.CreateActivityDto) === "function" ? _k : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "createActivity", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('delete:activity'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "deleteActivity", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('create:assignment'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof _shared_1.CreateAssignmentDto !== "undefined" && _shared_1.CreateAssignmentDto) === "function" ? _l : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "createAssignment", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('delete:assignment'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof _shared_1.DeleteAssignmentDto !== "undefined" && _shared_1.DeleteAssignmentDto) === "function" ? _m : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "deleteAssignment", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('create:allocation'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof _shared_1.CreateAllocationDto !== "undefined" && _shared_1.CreateAllocationDto) === "function" ? _o : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "createAllocation", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('update:allocation'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof _shared_1.UpdateAllocationDto !== "undefined" && _shared_1.UpdateAllocationDto) === "function" ? _p : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "updateAllocation", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('update:period'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof _shared_1.UpdatePeriodDto !== "undefined" && _shared_1.UpdatePeriodDto) === "function" ? _q : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "updatePeriod", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('update:activity-name'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof _shared_1.UpdateActivityNameDto !== "undefined" && _shared_1.UpdateActivityNameDto) === "function" ? _r : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "updateActivityName", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('update:activity-color'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, util_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof _shared_1.UpdateActivityColorDto !== "undefined" && _shared_1.UpdateActivityColorDto) === "function" ? _s : Object, String]),
    __metadata("design:returntype", Promise)
], GanttGateway.prototype, "updateActivityColor", null);
exports.GanttGateway = GanttGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: 'project-management/gantt',
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof planning_service_1.PlanningService !== "undefined" && planning_service_1.PlanningService) === "function" ? _a : Object, typeof (_b = typeof project_manager_service_1.ProjectManagerService !== "undefined" && project_manager_service_1.ProjectManagerService) === "function" ? _b : Object, typeof (_c = typeof team_service_1.TeamService !== "undefined" && team_service_1.TeamService) === "function" ? _c : Object])
], GanttGateway);


/***/ }),

/***/ "./src/app/project-management/index.ts":
/*!*********************************************!*\
  !*** ./src/app/project-management/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./project-management.module */ "./src/app/project-management/project-management.module.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/create-activity/create-activity.command.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/create-activity/create-activity.command.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateActivityCommand = void 0;
class CreateActivityCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateActivityCommand = CreateActivityCommand;


/***/ }),

/***/ "./src/app/project-management/planning/commands/create-activity/create-activity.handler.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/create-activity/create-activity.handler.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateActivityHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_activity_command_1 = __webpack_require__(/*! ./create-activity.command */ "./src/app/project-management/planning/commands/create-activity/create-activity.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let CreateActivityHandler = class CreateActivityHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (u:User {uid: $uid})
        MATCH (p:Activity)
            WHERE p.id = $parent.id

        CALL apoc.create.node(
            ["Activity", $kind],
            $properties
        )
        YIELD node AS activity


        SET activity += {
            startDate: date(p.startDate),
            endDate: date(p.endDate),
            cost: 0,
            sales: 0,
            profit: 0,
            coverage: 0,
            defaultWork: 0,
            overtimeWork: 0,
            totalWork: 0
        }
        MERGE (p)-[:HAS]->(activity)
        MERGE (activity)-[:CREATED_BY {timestamp: timestamp()}]->(u)
        
        WITH p, activity

        CALL {
            WITH p
            UNWIND range(0, size($parent.children)) AS seq
            MATCH (p)-[rel:HAS]->(child:Activity {id: $parent.children[seq]})
            SET rel.sequence = toInteger(seq)
        }

        RETURN activity{.*} AS result
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            properties: command.dto.properties,
            kind: command.dto.kind,
            parent: command.dto.parent,
            uid: command.uid,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'activity.created',
            });
            return new _shared_1.FormSuccessResponse({
                message: 'Aktiviteten blev oprettet.',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Aktiviteten blev ikke oprettet.',
        });
    }
};
exports.CreateActivityHandler = CreateActivityHandler;
exports.CreateActivityHandler = CreateActivityHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_activity_command_1.CreateActivityCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], CreateActivityHandler);


/***/ }),

/***/ "./src/app/project-management/planning/commands/create-activity/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/create-activity/index.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-activity.command */ "./src/app/project-management/planning/commands/create-activity/create-activity.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-activity.handler */ "./src/app/project-management/planning/commands/create-activity/create-activity.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/create-allocation/create-allocation.command.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/create-allocation/create-allocation.command.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAllocationCommand = void 0;
class CreateAllocationCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateAllocationCommand = CreateAllocationCommand;


/***/ }),

/***/ "./src/app/project-management/planning/commands/create-allocation/create-allocation.handler.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/create-allocation/create-allocation.handler.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAllocationHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_allocation_command_1 = __webpack_require__(/*! ./create-allocation.command */ "./src/app/project-management/planning/commands/create-allocation/create-allocation.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let CreateAllocationHandler = class CreateAllocationHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (u:User {uid: $uid})
        MATCH (t:Task)
            WHERE t.id = $taskId
        MATCH (a:Agent)
            WHERE a.id = $agentId

        CREATE (al:Activity:Allocation {
            id: $id,
            startDate: date($startDate),
            endDate: date($endDate),
            defaultMinutes: toInteger($defaultMinutes),
            overtimeMinutes: toInteger($overtimeMinutes)
        })
        MERGE (t)-[ar:HAS]->(al)
        MERGE (a)-[:IS_ASSIGNED_TO]->(al)
        MERGE (al)-[ur:CREATED_BY {timestamp: timestamp()}]->(u)

        RETURN {
            allocation: al{
                .*,
                kind: apoc.coll.sort(apoc.node.labels(al))[1],
                identity: ID(al)
            }
        } AS result
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        if (result) {
            const event = {
                ...command.dto,
                uid: command.uid,
                type: 'allocation.created',
            };
            this.publisher.publish(event);
            return new _shared_1.FormSuccessResponse({
                message: 'Allokeringen blev oprettet.',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Allokeringen blev ikke oprettet.',
        });
    }
};
exports.CreateAllocationHandler = CreateAllocationHandler;
exports.CreateAllocationHandler = CreateAllocationHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_allocation_command_1.CreateAllocationCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], CreateAllocationHandler);


/***/ }),

/***/ "./src/app/project-management/planning/commands/create-allocation/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/create-allocation/index.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-allocation.command */ "./src/app/project-management/planning/commands/create-allocation/create-allocation.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-allocation.handler */ "./src/app/project-management/planning/commands/create-allocation/create-allocation.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/create-assignment/create-assignment.command.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/create-assignment/create-assignment.command.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAssignmentCommand = void 0;
class CreateAssignmentCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateAssignmentCommand = CreateAssignmentCommand;


/***/ }),

/***/ "./src/app/project-management/planning/commands/create-assignment/create-assignment.handler.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/create-assignment/create-assignment.handler.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAssignmentHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_assignment_command_1 = __webpack_require__(/*! ./create-assignment.command */ "./src/app/project-management/planning/commands/create-assignment/create-assignment.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let CreateAssignmentHandler = class CreateAssignmentHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (u:User {uid: $uid})
        MATCH (t:Task)
            WHERE t.id = $taskId
        MATCH (agent:Agent)
            WHERE agent.id = $agentId
        MERGE (agent)-[:IS_ASSIGNED_TO {createdBy: u.uid, createdAt: timestamp(), id: $id}]->(t)
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'assignment.created',
            });
            return new _shared_1.FormSuccessResponse({ message: 'Tildelingen blev oprettet.' });
        }
        return new _shared_1.FormErrorResponse({ message: 'Der skete en fejl.' });
    }
};
exports.CreateAssignmentHandler = CreateAssignmentHandler;
exports.CreateAssignmentHandler = CreateAssignmentHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_assignment_command_1.CreateAssignmentCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], CreateAssignmentHandler);


/***/ }),

/***/ "./src/app/project-management/planning/commands/create-assignment/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/create-assignment/index.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-assignment.command */ "./src/app/project-management/planning/commands/create-assignment/create-assignment.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-assignment.handler */ "./src/app/project-management/planning/commands/create-assignment/create-assignment.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/delete-activity/delete-activity.command.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/delete-activity/delete-activity.command.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteActivityCommand = void 0;
class DeleteActivityCommand {
    constructor(activityId, uid) {
        this.activityId = activityId;
        this.uid = uid;
    }
}
exports.DeleteActivityCommand = DeleteActivityCommand;


/***/ }),

/***/ "./src/app/project-management/planning/commands/delete-activity/delete-activity.handler.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/delete-activity/delete-activity.handler.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteActivityHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const delete_activity_command_1 = __webpack_require__(/*! ./delete-activity.command */ "./src/app/project-management/planning/commands/delete-activity/delete-activity.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let DeleteActivityHandler = class DeleteActivityHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (w:Workpackage)-[:HAS*1..5]->(a:Activity)
            WHERE a.id = $activityId

        CALL {
            WITH a, w
            OPTIONAL MATCH (a)-[:HAS]->(:Allocation)<-[:IS_ASSIGNED_TO]-(agent:Agent)
            WITH DISTINCT agent, w
            WITH collect({workpackageId: w.id, agentId: agent.id}) AS bookingsSyncedEvents
            RETURN bookingsSyncedEvents
        }
        WITH apoc.coll.sort(
            apoc.node.labels(a)
        )[1] AS kind, w.id AS workpackageId, a, bookingsSyncedEvents
        CALL {
            WITH a
            MATCH (a)-[:HAS*1..4]->(children:Activity)
            DETACH DELETE children
        }
        DETACH DELETE a

        RETURN bookingsSyncedEvents AS syncEvents, {
            kind: kind, 
            workpackageId: workpackageId
        } AS result
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            activityId: command.activityId,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        if (result) {
            this.publisher.publish({
                activityId: command.activityId,
                uid: command.uid,
                type: 'activity.deleted',
                syncEvents: queryResult.records[0].get('syncEvents'),
            });
            return new _shared_1.FormSuccessResponse({ message: 'Aktiviteten blev slettet.' });
        }
        return new _shared_1.FormErrorResponse({ message: 'Der skete en fejl.' });
    }
};
exports.DeleteActivityHandler = DeleteActivityHandler;
exports.DeleteActivityHandler = DeleteActivityHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_activity_command_1.DeleteActivityCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], DeleteActivityHandler);


/***/ }),

/***/ "./src/app/project-management/planning/commands/delete-activity/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/delete-activity/index.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./delete-activity.command */ "./src/app/project-management/planning/commands/delete-activity/delete-activity.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-activity.handler */ "./src/app/project-management/planning/commands/delete-activity/delete-activity.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/delete-assignment/delete-assignment.command.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/delete-assignment/delete-assignment.command.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAssignmentCommand = void 0;
class DeleteAssignmentCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.DeleteAssignmentCommand = DeleteAssignmentCommand;


/***/ }),

/***/ "./src/app/project-management/planning/commands/delete-assignment/delete-assignment.handler.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/delete-assignment/delete-assignment.handler.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAssignmentHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const delete_assignment_command_1 = __webpack_require__(/*! ./delete-assignment.command */ "./src/app/project-management/planning/commands/delete-assignment/delete-assignment.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let DeleteAssignmentHandler = class DeleteAssignmentHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (agent:Agent)-[rel:IS_ASSIGNED_TO]->(t:Task)<-[:HAS*3]-(w:Workpackage)
            WHERE agent.id = $agentId
            AND t.id = $taskId
        
        CALL {
            WITH t, agent
            MATCH (allocation)<-[:IS_ASSIGNED_TO]-(agent)
                WHERE (allocation)<-[:HAS]-(t)
            DETACH DELETE allocation
        }
        DELETE rel
        RETURN agent.id AS agentId, w.id AS workpackageId
    `;
    }
    async execute({ dto, uid }) {
        const queryResult = await this.client.write(this.query, {
            agentId: dto.agentId,
            taskId: dto.taskId,
        });
        const workpackageId = queryResult.records[0]?.get('workpackageId');
        const agentId = queryResult.records[0]?.get('agentId');
        if (agentId && workpackageId) {
            this.publisher.publish({
                ...dto,
                uid,
                type: 'assignment.deleted',
                agentId,
                workpackageId,
            });
            return new _shared_1.FormSuccessResponse({
                message: 'Teammedlemmet blev fjernet fra opgaven.',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Teammedlemmet kunne ikke fjernes fra opgaven.',
        });
    }
};
exports.DeleteAssignmentHandler = DeleteAssignmentHandler;
exports.DeleteAssignmentHandler = DeleteAssignmentHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_assignment_command_1.DeleteAssignmentCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], DeleteAssignmentHandler);


/***/ }),

/***/ "./src/app/project-management/planning/commands/delete-assignment/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/delete-assignment/index.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./delete-assignment.command */ "./src/app/project-management/planning/commands/delete-assignment/delete-assignment.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-assignment.handler */ "./src/app/project-management/planning/commands/delete-assignment/delete-assignment.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/handlers.ts":
/*!******************************************************************!*\
  !*** ./src/app/project-management/planning/commands/handlers.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commandHandlers = void 0;
const create_activity_1 = __webpack_require__(/*! ./create-activity */ "./src/app/project-management/planning/commands/create-activity/index.ts");
const create_allocation_1 = __webpack_require__(/*! ./create-allocation */ "./src/app/project-management/planning/commands/create-allocation/index.ts");
const create_assignment_1 = __webpack_require__(/*! ./create-assignment */ "./src/app/project-management/planning/commands/create-assignment/index.ts");
const delete_activity_1 = __webpack_require__(/*! ./delete-activity */ "./src/app/project-management/planning/commands/delete-activity/index.ts");
const delete_assignment_1 = __webpack_require__(/*! ./delete-assignment */ "./src/app/project-management/planning/commands/delete-assignment/index.ts");
const update_activity_name_1 = __webpack_require__(/*! ./update-activity-name */ "./src/app/project-management/planning/commands/update-activity-name/index.ts");
const update_allocation_1 = __webpack_require__(/*! ./update-allocation */ "./src/app/project-management/planning/commands/update-allocation/index.ts");
const update_period_1 = __webpack_require__(/*! ./update-period */ "./src/app/project-management/planning/commands/update-period/index.ts");
exports.commandHandlers = [
    create_activity_1.CreateActivityHandler,
    create_allocation_1.CreateAllocationHandler,
    create_assignment_1.CreateAssignmentHandler,
    delete_activity_1.DeleteActivityHandler,
    delete_assignment_1.DeleteAssignmentHandler,
    update_allocation_1.UpdateAllocationHandler,
    update_period_1.UpdatePeriodHandler,
    update_activity_name_1.UpdateActivityNameHandler,
    update_activity_name_1.UpdateActivityNameHandler
];


/***/ }),

/***/ "./src/app/project-management/planning/commands/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/project-management/planning/commands/index.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/project-management/planning/commands/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-activity */ "./src/app/project-management/planning/commands/create-activity/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-allocation */ "./src/app/project-management/planning/commands/create-allocation/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-assignment */ "./src/app/project-management/planning/commands/create-assignment/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-activity */ "./src/app/project-management/planning/commands/delete-activity/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-assignment */ "./src/app/project-management/planning/commands/delete-assignment/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-activity-color */ "./src/app/project-management/planning/commands/update-activity-color/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-activity-name */ "./src/app/project-management/planning/commands/update-activity-name/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-allocation */ "./src/app/project-management/planning/commands/update-allocation/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-period */ "./src/app/project-management/planning/commands/update-period/index.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-activity-color/index.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-activity-color/index.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-activity-color.command */ "./src/app/project-management/planning/commands/update-activity-color/update-activity-color.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-activity-color.handler */ "./src/app/project-management/planning/commands/update-activity-color/update-activity-color.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-activity-color/update-activity-color.command.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-activity-color/update-activity-color.command.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateActivityColorCommand = void 0;
class UpdateActivityColorCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateActivityColorCommand = UpdateActivityColorCommand;


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-activity-color/update-activity-color.handler.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-activity-color/update-activity-color.handler.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateActivityColorHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_activity_color_command_1 = __webpack_require__(/*! ./update-activity-color.command */ "./src/app/project-management/planning/commands/update-activity-color/update-activity-color.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdateActivityColorHandler = class UpdateActivityColorHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (a:Activity)
            WHERE a.id = $activityId
        SET a.color = $color
        RETURN {} AS result
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            activityId: command.dto.activityId,
            color: command.dto.color,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'activity.updated',
            });
            return new _shared_1.FormSuccessResponse({ message: 'Farven er opdateret.' });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Farven kunne ikke opdateres.',
        });
    }
};
exports.UpdateActivityColorHandler = UpdateActivityColorHandler;
exports.UpdateActivityColorHandler = UpdateActivityColorHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_activity_color_command_1.UpdateActivityColorCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], UpdateActivityColorHandler);


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-activity-name/index.ts":
/*!************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-activity-name/index.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-activity-name.command */ "./src/app/project-management/planning/commands/update-activity-name/update-activity-name.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-activity-name.handler */ "./src/app/project-management/planning/commands/update-activity-name/update-activity-name.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-activity-name/update-activity-name.command.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-activity-name/update-activity-name.command.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateActivityNameCommand = void 0;
class UpdateActivityNameCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateActivityNameCommand = UpdateActivityNameCommand;


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-activity-name/update-activity-name.handler.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-activity-name/update-activity-name.handler.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateActivityNameHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_activity_name_command_1 = __webpack_require__(/*! ./update-activity-name.command */ "./src/app/project-management/planning/commands/update-activity-name/update-activity-name.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdateActivityNameHandler = class UpdateActivityNameHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (a:Activity)
            WHERE a.id = $activityId
        SET a.name = $name
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            activityId: command.dto.activityId,
            name: command.dto.name,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'activity.updated',
            });
            return new _shared_1.FormSuccessResponse({ message: 'Navnet er opdateret.' });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Navnet kunne ikke opdateres.',
        });
    }
};
exports.UpdateActivityNameHandler = UpdateActivityNameHandler;
exports.UpdateActivityNameHandler = UpdateActivityNameHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_activity_name_command_1.UpdateActivityNameCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], UpdateActivityNameHandler);


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-allocation/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-allocation/index.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-allocation.command */ "./src/app/project-management/planning/commands/update-allocation/update-allocation.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-allocation.handler */ "./src/app/project-management/planning/commands/update-allocation/update-allocation.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-allocation/update-allocation.command.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-allocation/update-allocation.command.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAllocationCommand = void 0;
class UpdateAllocationCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateAllocationCommand = UpdateAllocationCommand;


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-allocation/update-allocation.handler.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-allocation/update-allocation.handler.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAllocationHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_allocation_command_1 = __webpack_require__(/*! ./update-allocation.command */ "./src/app/project-management/planning/commands/update-allocation/update-allocation.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdateAllocationHandler = class UpdateAllocationHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (u:User {uid: $uid})
        MATCH (al:Allocation)<-[rel:IS_ASSIGNED_TO]-(:Agent)
            WHERE al.id = $allocationId

        CALL {
            WITH rel
            MATCH (a:Agent)
                WHERE a.id = $agentId
            CALL apoc.refactor.from(rel, a)
            YIELD output
            RETURN output
        }

        SET al.startDate = date($startDate),
            al.endDate = date($endDate),
            al.defaultMinutes = toInteger($defaultMinutes),
            al.overtimeMinutes = toInteger($overtimeMinutes)

    `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            const event = {
                ...command.dto,
                uid: command.uid,
                type: 'allocation.updated',
            };
            this.publisher.publish(event);
            return new _shared_1.FormSuccessResponse({
                message: 'Allokeringen er opdateret.',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Allokeringen kunne ikke opdateres.',
        });
    }
};
exports.UpdateAllocationHandler = UpdateAllocationHandler;
exports.UpdateAllocationHandler = UpdateAllocationHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_allocation_command_1.UpdateAllocationCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], UpdateAllocationHandler);


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-period/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-period/index.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-period.command */ "./src/app/project-management/planning/commands/update-period/update-period.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-period.handler */ "./src/app/project-management/planning/commands/update-period/update-period.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-period/update-period.command.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-period/update-period.command.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePeriodCommand = void 0;
class UpdatePeriodCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdatePeriodCommand = UpdatePeriodCommand;


/***/ }),

/***/ "./src/app/project-management/planning/commands/update-period/update-period.handler.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/project-management/planning/commands/update-period/update-period.handler.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePeriodHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_period_command_1 = __webpack_require__(/*! ./update-period.command */ "./src/app/project-management/planning/commands/update-period/update-period.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdatePeriodHandler = class UpdatePeriodHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (a:Activity)
            WHERE a.id = $activityId
        CALL {
            WITH a
            RETURN {
                startDate: apoc.temporal.format(a.startDate, "YYYY-MM-dd"),
                endDate: apoc.temporal.format(a.endDate, "YYYY-MM-dd")
            } AS fromPeriod
        }
        SET a += {
            startDate: date($startDate),
            endDate: date($endDate)
        }
        WITH fromPeriod, a
        RETURN {
            activityId: a.id,
            fromPeriod: fromPeriod,
            toPeriod: {
                startDate: $startDate,
                endDate: $endDate
            },
            kind: apoc.coll.sort(
                apoc.node.labels(a)
            )[1]
        } AS result
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const result = queryResult.records[0]?.get('result');
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            const event = {
                ...result,
                uid: command.uid,
                type: 'activity.period.updated',
            };
            this.publisher.publish(event);
            return new _shared_1.FormSuccessResponse({ message: 'Period er opdateret.' });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Perioden kunne ikke opdateres.',
        });
    }
};
exports.UpdatePeriodHandler = UpdatePeriodHandler;
exports.UpdatePeriodHandler = UpdatePeriodHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_period_command_1.UpdatePeriodCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], UpdatePeriodHandler);


/***/ }),

/***/ "./src/app/project-management/planning/planning.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/project-management/planning/planning.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlanningModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/project-management/planning/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/project-management/planning/queries/index.ts");
const planning_service_1 = __webpack_require__(/*! ./planning.service */ "./src/app/project-management/planning/planning.service.ts");
let PlanningModule = class PlanningModule {
};
exports.PlanningModule = PlanningModule;
exports.PlanningModule = PlanningModule = __decorate([
    (0, common_1.Module)({
        providers: [...commands_1.commandHandlers, ...queries_1.queryHandlers, planning_service_1.PlanningService],
        exports: [planning_service_1.PlanningService],
    })
], PlanningModule);


/***/ }),

/***/ "./src/app/project-management/planning/planning.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/project-management/planning/planning.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlanningService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
let PlanningService = class PlanningService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async createActivity(dto, uid) { }
    async deleteActivity(activityId, uid) { }
    async createAssignment(dto, uid) { }
    async deleteAssignment(dto, uid) { }
    async createAllocation(dto, uid) { }
    async updateAllocation(dto, uid) { }
    async updatePeriod(dto, uid) { }
    async updateActivityName(dto, uid) { }
    async updateActivityColor(dto, uid) { }
};
exports.PlanningService = PlanningService;
exports.PlanningService = PlanningService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], PlanningService);


/***/ }),

/***/ "./src/app/project-management/planning/queries/allocation/allocation.handler.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/project-management/planning/queries/allocation/allocation.handler.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllocationQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const allocation_query_1 = __webpack_require__(/*! ./allocation.query */ "./src/app/project-management/planning/queries/allocation/allocation.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let AllocationQueryHandler = class AllocationQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (a:Allocation {id: $allocationId})
        MATCH (a)<-[:IS_ASSIGNED_TO]-(agent:Agent)
        RETURN {
            id: a.id,
            agentId: agent.id,
            startDate: apoc.temporal.format(a.startDate, "YYYY-MM-dd"),
            endDate: apoc.temporal.format(a.endDate, "YYYY-MM-dd"),
            defaultWork: round(a.defaultMinutes/60, 1),
            overtimeWork: round(a.overtimeMinutes/60,1)
        } AS result
`;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, {
            allocationId: query.allocationId,
        });
        return queryResult.records[0].get('result');
    }
};
exports.AllocationQueryHandler = AllocationQueryHandler;
exports.AllocationQueryHandler = AllocationQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(allocation_query_1.AllocationQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], AllocationQueryHandler);


/***/ }),

/***/ "./src/app/project-management/planning/queries/allocation/allocation.query.ts":
/*!************************************************************************************!*\
  !*** ./src/app/project-management/planning/queries/allocation/allocation.query.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllocationQuery = void 0;
class AllocationQuery {
    constructor(allocationId) {
        this.allocationId = allocationId;
    }
}
exports.AllocationQuery = AllocationQuery;


/***/ }),

/***/ "./src/app/project-management/planning/queries/allocation/index.ts":
/*!*************************************************************************!*\
  !*** ./src/app/project-management/planning/queries/allocation/index.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./allocation.handler */ "./src/app/project-management/planning/queries/allocation/allocation.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./allocation.query */ "./src/app/project-management/planning/queries/allocation/allocation.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/queries/handlers.ts":
/*!*****************************************************************!*\
  !*** ./src/app/project-management/planning/queries/handlers.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const allocation_1 = __webpack_require__(/*! ./allocation */ "./src/app/project-management/planning/queries/allocation/index.ts");
const plan_1 = __webpack_require__(/*! ./plan */ "./src/app/project-management/planning/queries/plan/index.ts");
exports.queryHandlers = [plan_1.PlanQueryHandler, allocation_1.AllocationQueryHandler];


/***/ }),

/***/ "./src/app/project-management/planning/queries/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-management/planning/queries/index.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/project-management/planning/queries/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./allocation */ "./src/app/project-management/planning/queries/allocation/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./plan */ "./src/app/project-management/planning/queries/plan/index.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/queries/plan/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/project-management/planning/queries/plan/index.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./plan.handler */ "./src/app/project-management/planning/queries/plan/plan.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./plan.query */ "./src/app/project-management/planning/queries/plan/plan.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/planning/queries/plan/plan.handler.ts":
/*!**************************************************************************!*\
  !*** ./src/app/project-management/planning/queries/plan/plan.handler.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlanQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const plan_query_1 = __webpack_require__(/*! ./plan.query */ "./src/app/project-management/planning/queries/plan/plan.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let PlanQueryHandler = class PlanQueryHandler {
    constructor(client) {
        this.client = client;
        this.rowQuery = `
        MATCH (w:Workpackage)-[:HAS]->(plan:Plan)
            WHERE w.id = $workpackageId
        
        CALL {
            WITH plan
            MATCH (plan)-[rel:HAS]->(delivery:Delivery)
            WITH delivery, rel ORDER BY rel.sequence
            WITH collect(delivery) AS deliveries, collect(delivery.id) AS planChildren
            RETURN deliveries, planChildren
        }
        
        CALL {
            WITH plan, planChildren
            WITH {
                id: plan.id,
                children: planChildren,
                kind: "Plan",
                startDate: plan.startDate,
                endDate: plan.endDate,
                children: planChildren
            } AS planActivity
            RETURN planActivity
        }

        CALL {
            WITH deliveries
            UNWIND deliveries AS delivery
                OPTIONAL MATCH (delivery)-[rel:HAS]->(task:Task)
                WITH delivery, task, rel ORDER BY rel.sequence
                WITH delivery, collect(task) AS deliveryTasks, collect(task.id) AS deliveryChildren
            WITH collect({
                id: delivery.id,
                name: delivery.name,
                description: delivery.description,
                color: delivery.color,
                kind: "Delivery",
                children: deliveryChildren,
                startDate: delivery.startDate,
                endDate: delivery.endDate
            }) AS deliveryActivities, 
            apoc.coll.flatten(collect(deliveryTasks)) AS tasks
            RETURN deliveryActivities, tasks
        }
        
        CALL {
            WITH tasks
            UNWIND tasks AS task
                OPTIONAL MATCH (task)<-[rel:IS_ASSIGNED_TO]-(agent:Agent)
                WITH collect(rel.id) AS taskChildren, task
            WITH collect({
                id: task.id,
                name: task.name,
                description: task.description,
                kind: "Task",
                children: taskChildren,
                startDate: task.startDate,
                endDate: task.endDate
            }) AS taskActivities
            RETURN taskActivities
        }

        CALL {
            WITH planActivity, deliveryActivities, taskActivities
            WITH apoc.coll.flatten([planActivity, deliveryActivities, taskActivities]) AS activities
            RETURN activities
        }
        RETURN activities
    `;
        this.teamQuery = `
        MATCH (r:Resource)<-[:IS]-(a:Agent)-[:IS]->(rt:ResourceType) 
            WHERE (a)-[*2]-(:Workpackage {id: $workpackageId})
        RETURN {
            id: a.id,
            resource: {
                id: r.id,
                name: r.name,
                color: r.color,
                costRate: {
                    default: r.costDefault,
                    overtime: r.costOvertime
                }
            },
            resourceType: {
                id: rt.id,
                name: rt.name,
                typeNo: rt.typeNo,
                abbrevation: rt.abbrevation,
                salesRate: {
                    default: rt.salesDefault,
                    overtime: rt.salesOvertime
                }
            }
        } AS teamMember
    `;
        this.assignmentQuery = `
        MATCH (w:Workpackage)
            WHERE w.id = $workpackageId

        MATCH (task:Task)<-[rel:IS_ASSIGNED_TO]-(agent:Agent)
            WHERE (task)<-[:HAS*3]-(w)
        CALL {
            WITH task, agent
            OPTIONAL MATCH (task)-[:HAS]->(allocation:Allocation)
                WHERE (allocation)<-[:IS_ASSIGNED_TO]-(agent)
            WITH collect({
                id: allocation.id,
                interval: {
                    start: allocation.startDate,
                    end: allocation.endDate
                },
                timesheet: {
                    defaultMinutes: allocation.defaultMinutes,
                    overtimeMinutes: allocation.overtimeMinutes
                }
            }) AS allocationArr
            RETURN CASE
                WHEN allocationArr[0].id IS NOT NULL
                    THEN allocationArr
                ELSE []
            END AS allocations
        }
        RETURN {
            id: rel.id,
            task: task.id,
            agent: agent.id,
            allocations: allocations
        } AS assignment
    `;
    }
    async execute({ workpackageId }) {
        return await Promise.all([
            this.getActivities(workpackageId),
            this.getTeam(workpackageId),
            this.getAssignments(workpackageId),
        ]).then((res) => ({
            activities: res[0],
            team: res[1],
            assignments: res[2],
        }));
    }
    async getActivities(workpackageId) {
        const queryResult = await this.client.read(this.rowQuery, {
            workpackageId: workpackageId,
        });
        return queryResult.records[0]?.get('activities');
    }
    async getTeam(workpackageId) {
        const queryResult = await this.client.read(this.teamQuery, {
            workpackageId: workpackageId,
        });
        return queryResult.records.map((d) => d.get('teamMember'));
    }
    async getAssignments(workpackageId) {
        const queryResult = await this.client.read(this.assignmentQuery, {
            workpackageId: workpackageId,
        });
        return queryResult.records.map((d) => d.get('assignment'));
    }
};
exports.PlanQueryHandler = PlanQueryHandler;
exports.PlanQueryHandler = PlanQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(plan_query_1.PlanQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], PlanQueryHandler);


/***/ }),

/***/ "./src/app/project-management/planning/queries/plan/plan.query.ts":
/*!************************************************************************!*\
  !*** ./src/app/project-management/planning/queries/plan/plan.query.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlanQuery = void 0;
class PlanQuery {
    constructor(workpackageId) {
        this.workpackageId = workpackageId;
    }
}
exports.PlanQuery = PlanQuery;


/***/ }),

/***/ "./src/app/project-management/project-management.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/project-management/project-management.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagementModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const planning_module_1 = __webpack_require__(/*! ./planning/planning.module */ "./src/app/project-management/planning/planning.module.ts");
const project_managers_1 = __webpack_require__(/*! ./project-managers */ "./src/app/project-management/project-managers/index.ts");
const team_module_1 = __webpack_require__(/*! ./team/team.module */ "./src/app/project-management/team/team.module.ts");
const workpackages_1 = __webpack_require__(/*! ./workpackages */ "./src/app/project-management/workpackages/index.ts");
const gantt_gateway_1 = __webpack_require__(/*! ./gantt.gateway */ "./src/app/project-management/gantt.gateway.ts");
let ProjectManagementModule = class ProjectManagementModule {
};
exports.ProjectManagementModule = ProjectManagementModule;
exports.ProjectManagementModule = ProjectManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [planning_module_1.PlanningModule, project_managers_1.ProjectManagersModule, team_module_1.TeamModule, workpackages_1.WorkpackagesModule],
        providers: [gantt_gateway_1.GanttGateway],
    })
], ProjectManagementModule);


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/assign-project-manager/assign-project-manager.command.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/assign-project-manager/assign-project-manager.command.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssignProjectManagerCommand = void 0;
class AssignProjectManagerCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.AssignProjectManagerCommand = AssignProjectManagerCommand;


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/assign-project-manager/assign-project-manager.handler.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/assign-project-manager/assign-project-manager.handler.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssignProjectManagerHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const assign_project_manager_command_1 = __webpack_require__(/*! ./assign-project-manager.command */ "./src/app/project-management/project-managers/commands/assign-project-manager/assign-project-manager.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let AssignProjectManagerHandler = class AssignProjectManagerHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (w:Workpackage)--(:Plan)<-[rel:MANAGES]-(:ProjectManager)
            WHERE w.id = $workpackageId
        MATCH (pm:ProjectManager)
            WHERE pm.id = $projectManagerId
        CALL apoc.refactor.from(rel, pm)
        YIELD output 
        RETURN {} AS result
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'project-manager.assigned',
            });
            return new _shared_1.FormSuccessResponse({ message: 'Projektlederen er tildelt arbejdspakken.' });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Projektlederen kunne ikke tildeles arbejdspakken.',
        });
    }
};
exports.AssignProjectManagerHandler = AssignProjectManagerHandler;
exports.AssignProjectManagerHandler = AssignProjectManagerHandler = __decorate([
    (0, cqrs_1.CommandHandler)(assign_project_manager_command_1.AssignProjectManagerCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], AssignProjectManagerHandler);


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/assign-project-manager/index.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/assign-project-manager/index.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./assign-project-manager.command */ "./src/app/project-management/project-managers/commands/assign-project-manager/assign-project-manager.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./assign-project-manager.handler */ "./src/app/project-management/project-managers/commands/assign-project-manager/assign-project-manager.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/create-project-manager/create-project-manager.command.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/create-project-manager/create-project-manager.command.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProjectManagerCommand = void 0;
class CreateProjectManagerCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateProjectManagerCommand = CreateProjectManagerCommand;


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/create-project-manager/create-project-manager.handler.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/create-project-manager/create-project-manager.handler.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProjectManagerHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_project_manager_command_1 = __webpack_require__(/*! ./create-project-manager.command */ "./src/app/project-management/project-managers/commands/create-project-manager/create-project-manager.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let CreateProjectManagerHandler = class CreateProjectManagerHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
    }
    async execute({ dto, uid }) {
        const query = this.getQuery(dto.id);
        const queryResult = await this.client.write(query, {
            ...dto,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...dto,
                uid,
                type: 'project-manager.created',
            });
            return new _shared_1.FormSuccessResponse({
                message: 'Projektlederen er oprettet',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Det skete en fejl ved oprettelsen af projektlederen',
        });
    }
    getQuery(id) {
        const queryId = id ? '$id' : 'apoc.create.uuid()';
        return `
            MERGE (pm {
                id: ${queryId})
            SET pm += {
                name: $name,
                color: $color
            }
            WITH pm
            SET pm:ProjectManager
        `;
    }
};
exports.CreateProjectManagerHandler = CreateProjectManagerHandler;
exports.CreateProjectManagerHandler = CreateProjectManagerHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_project_manager_command_1.CreateProjectManagerCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], CreateProjectManagerHandler);


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/create-project-manager/index.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/create-project-manager/index.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-project-manager.command */ "./src/app/project-management/project-managers/commands/create-project-manager/create-project-manager.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-project-manager.handler */ "./src/app/project-management/project-managers/commands/create-project-manager/create-project-manager.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/handlers.ts":
/*!**************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/handlers.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commandHandlers = void 0;
const assign_project_manager_1 = __webpack_require__(/*! ./assign-project-manager */ "./src/app/project-management/project-managers/commands/assign-project-manager/index.ts");
const create_project_manager_1 = __webpack_require__(/*! ./create-project-manager */ "./src/app/project-management/project-managers/commands/create-project-manager/index.ts");
const remove_project_manager_1 = __webpack_require__(/*! ./remove-project-manager */ "./src/app/project-management/project-managers/commands/remove-project-manager/index.ts");
const update_project_manager_1 = __webpack_require__(/*! ./update-project-manager */ "./src/app/project-management/project-managers/commands/update-project-manager/index.ts");
exports.commandHandlers = [
    assign_project_manager_1.AssignProjectManagerHandler,
    create_project_manager_1.CreateProjectManagerHandler,
    remove_project_manager_1.RemoveProjectManagerHandler,
    update_project_manager_1.UpdateProjectManagerHandler
];


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/index.ts":
/*!***********************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/index.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./assign-project-manager */ "./src/app/project-management/project-managers/commands/assign-project-manager/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-project-manager */ "./src/app/project-management/project-managers/commands/create-project-manager/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/project-management/project-managers/commands/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./remove-project-manager */ "./src/app/project-management/project-managers/commands/remove-project-manager/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-project-manager */ "./src/app/project-management/project-managers/commands/update-project-manager/index.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/remove-project-manager/index.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/remove-project-manager/index.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./remove-project-manager.command */ "./src/app/project-management/project-managers/commands/remove-project-manager/remove-project-manager.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./remove-project-manager.handler */ "./src/app/project-management/project-managers/commands/remove-project-manager/remove-project-manager.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/remove-project-manager/remove-project-manager.command.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/remove-project-manager/remove-project-manager.command.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveProjectManagerCommand = void 0;
class RemoveProjectManagerCommand {
    constructor(projectManagerId, uid) {
        this.projectManagerId = projectManagerId;
        this.uid = uid;
    }
}
exports.RemoveProjectManagerCommand = RemoveProjectManagerCommand;


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/remove-project-manager/remove-project-manager.handler.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/remove-project-manager/remove-project-manager.handler.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveProjectManagerHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const remove_project_manager_command_1 = __webpack_require__(/*! ./remove-project-manager.command */ "./src/app/project-management/project-managers/commands/remove-project-manager/remove-project-manager.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let RemoveProjectManagerHandler = class RemoveProjectManagerHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.labelsQuery = `
        MATCH (pm:ProjectManager)
            WHERE pm.id = $projectManagerId
        WITH labels(pm) AS pmLabels
        RETURN pmLabels as pmLabels
    `;
        this.deleteQuery = `
        MATCH (pm:ProjectManager)
            WHERE pm.id = $projectManagerId
        DETACH DELETE pm
    `;
        this.removeLabelQuery = `
        MATCH (pm:ProjectManager)
            WHERE pm.id = $projectManagerId
        CALL {
            WITH pm
            OPTIONAL MATCH (pm)-[rel:MANAGES]->(p:Plan)
            DELETE rel
        }
        REMOVE pm:ProjectManager
    `;
    }
    async execute(command) {
        const { projectManagerId, uid } = command;
        const shouldDelete = await this.examineLabels(projectManagerId);
        if (shouldDelete) {
            const deleted = await this.deleteProjectManager(projectManagerId);
            if (deleted) {
                this.publisher.publish({
                    ...command,
                    type: 'project-manager.deleted',
                });
                return new _shared_1.FormSuccessResponse({
                    message: 'Projektlederen er blevet slettet',
                });
            }
        }
        else {
            const removed = await this.removeProjectManagerLabel(projectManagerId);
            if (removed) {
                this.publisher.publish({
                    ...command,
                    type: 'project-manager.removed',
                });
                return new _shared_1.FormSuccessResponse({
                    message: 'Projektlederen er blevet fjernet',
                });
            }
        }
        return new _shared_1.FormErrorResponse({
            message: 'Der skete en fejl under sletning af projektlederen',
        });
    }
    async examineLabels(projectManagerId) {
        const queryResult = await this.client.read(this.labelsQuery, { projectManagerId });
        const labels = queryResult.records[0].get('pmLabels');
        console.log(labels);
        return labels.length === 1;
    }
    async deleteProjectManager(projectManagerId) {
        const queryResult = await this.client.write(this.deleteQuery, { projectManagerId });
        const { summary } = queryResult;
        return summary.updateStatistics.containsUpdates();
    }
    async removeProjectManagerLabel(projectManagerId) {
        const queryResult = await this.client.write(this.removeLabelQuery, {
            projectManagerId,
        });
        const { summary } = queryResult;
        return summary.updateStatistics.containsUpdates();
    }
};
exports.RemoveProjectManagerHandler = RemoveProjectManagerHandler;
exports.RemoveProjectManagerHandler = RemoveProjectManagerHandler = __decorate([
    (0, cqrs_1.CommandHandler)(remove_project_manager_command_1.RemoveProjectManagerCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], RemoveProjectManagerHandler);


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/update-project-manager/index.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/update-project-manager/index.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-project-manager.command */ "./src/app/project-management/project-managers/commands/update-project-manager/update-project-manager.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-project-manager.handler */ "./src/app/project-management/project-managers/commands/update-project-manager/update-project-manager.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/update-project-manager/update-project-manager.command.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/update-project-manager/update-project-manager.command.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProjectManagerCommand = void 0;
class UpdateProjectManagerCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateProjectManagerCommand = UpdateProjectManagerCommand;


/***/ }),

/***/ "./src/app/project-management/project-managers/commands/update-project-manager/update-project-manager.handler.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/commands/update-project-manager/update-project-manager.handler.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProjectManagerHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_project_manager_command_1 = __webpack_require__(/*! ./update-project-manager.command */ "./src/app/project-management/project-managers/commands/update-project-manager/update-project-manager.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdateProjectManagerHandler = class UpdateProjectManagerHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (n:ProjectManager)
            WHERE n.id = $id
        SET n += {
            name: $name,
            color: $color
        }
    `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'project-manager.updated',
            });
            return new _shared_1.FormSuccessResponse({
                message: 'Projektlederen blev opdateret',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Der skete en fejl under opdateringen af projektlederen',
        });
    }
};
exports.UpdateProjectManagerHandler = UpdateProjectManagerHandler;
exports.UpdateProjectManagerHandler = UpdateProjectManagerHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_project_manager_command_1.UpdateProjectManagerCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], UpdateProjectManagerHandler);


/***/ }),

/***/ "./src/app/project-management/project-managers/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-management/project-managers/index.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./project-managers.module */ "./src/app/project-management/project-managers/project-managers.module.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/project-manager.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/project-management/project-managers/project-manager.service.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagerService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/project-management/project-managers/queries/index.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const util_1 = __webpack_require__(/*! @/libs/util */ "./src/libs/util/index.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/project-management/project-managers/commands/index.ts");
let ProjectManagerService = class ProjectManagerService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async getProjectManagers() {
        return await this.queryBus.execute(new queries_1.ProjectManagersQuery());
    }
    async getProjectManager(projectManagerId) {
        return await this.queryBus.execute(new queries_1.ProjectManagerQuery(projectManagerId));
    }
    async createProjectManager(dto, uid) {
        return await this.commandBus.execute(new commands_1.CreateProjectManagerCommand(dto, uid));
    }
    async updateProjectManager(dto, uid) {
        return await this.commandBus.execute(new commands_1.UpdateProjectManagerCommand(dto, uid));
    }
    async deleteProjectManager(projectManagerId, uid) {
        return await this.commandBus.execute(new commands_1.RemoveProjectManagerCommand(projectManagerId, uid));
    }
    async assignProjectManager(dto, uid) {
        return await this.commandBus.execute(new commands_1.AssignProjectManagerCommand(dto, uid));
    }
    async getProjectManagerOptions() {
        return await this.queryBus.execute(new queries_1.ProjectManagerOptionsQuery());
    }
};
exports.ProjectManagerService = ProjectManagerService;
__decorate([
    __param(0, (0, common_1.Param)('projectManagerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectManagerService.prototype, "getProjectManager", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof _shared_1.CreateProjectManagerDto !== "undefined" && _shared_1.CreateProjectManagerDto) === "function" ? _c : Object, String]),
    __metadata("design:returntype", Promise)
], ProjectManagerService.prototype, "createProjectManager", null);
exports.ProjectManagerService = ProjectManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], ProjectManagerService);


/***/ }),

/***/ "./src/app/project-management/project-managers/project-managers.controller.ts":
/*!************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/project-managers.controller.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const util_1 = __webpack_require__(/*! @/libs/util */ "./src/libs/util/index.ts");
const project_manager_service_1 = __webpack_require__(/*! ./project-manager.service */ "./src/app/project-management/project-managers/project-manager.service.ts");
let ProjectManagersController = class ProjectManagersController {
    constructor(projectManagerService) {
        this.projectManagerService = projectManagerService;
    }
    async getProjectManagers() {
        return await this.projectManagerService.getProjectManagers();
    }
    async getProjectManager(projectManagerId) {
        return await this.projectManagerService.getProjectManager(projectManagerId);
    }
    async createProjectManager(dto, uid) {
        return await this.projectManagerService.createProjectManager(dto, uid);
    }
    async updateProjectManager(dto, projectManagerId, uid) {
        return await this.projectManagerService.updateProjectManager({
            ...dto,
            id: projectManagerId,
        }, uid);
    }
    async deleteProjectManager(id, httpUser) {
        return await this.projectManagerService.deleteProjectManager(id, httpUser);
    }
};
exports.ProjectManagersController = ProjectManagersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectManagersController.prototype, "getProjectManagers", null);
__decorate([
    (0, common_1.Get)(':projectManagerId'),
    __param(0, (0, common_1.Param)('projectManagerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectManagersController.prototype, "getProjectManager", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof _shared_1.CreateProjectManagerDto !== "undefined" && _shared_1.CreateProjectManagerDto) === "function" ? _b : Object, String]),
    __metadata("design:returntype", Promise)
], ProjectManagersController.prototype, "createProjectManager", null);
__decorate([
    (0, common_1.Post)(':projectManagerId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('projectManagerId')),
    __param(2, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof Omit !== "undefined" && Omit) === "function" ? _c : Object, String, String]),
    __metadata("design:returntype", Promise)
], ProjectManagersController.prototype, "updateProjectManager", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProjectManagersController.prototype, "deleteProjectManager", null);
exports.ProjectManagersController = ProjectManagersController = __decorate([
    (0, common_1.Controller)('project-managers'),
    __metadata("design:paramtypes", [typeof (_a = typeof project_manager_service_1.ProjectManagerService !== "undefined" && project_manager_service_1.ProjectManagerService) === "function" ? _a : Object])
], ProjectManagersController);


/***/ }),

/***/ "./src/app/project-management/project-managers/project-managers.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/project-management/project-managers/project-managers.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/project-management/project-managers/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/project-management/project-managers/queries/index.ts");
const project_managers_controller_1 = __webpack_require__(/*! ./project-managers.controller */ "./src/app/project-management/project-managers/project-managers.controller.ts");
const project_manager_service_1 = __webpack_require__(/*! ./project-manager.service */ "./src/app/project-management/project-managers/project-manager.service.ts");
let ProjectManagersModule = class ProjectManagersModule {
};
exports.ProjectManagersModule = ProjectManagersModule;
exports.ProjectManagersModule = ProjectManagersModule = __decorate([
    (0, common_1.Module)({
        providers: [...commands_1.commandHandlers, ...queries_1.queryHandlers, project_manager_service_1.ProjectManagerService],
        controllers: [project_managers_controller_1.ProjectManagersController],
        exports: [project_manager_service_1.ProjectManagerService],
    })
], ProjectManagersModule);


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/handlers.ts":
/*!*************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/handlers.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const is_project_manager_1 = __webpack_require__(/*! ./is-project-manager */ "./src/app/project-management/project-managers/queries/is-project-manager/index.ts");
const project_manager_1 = __webpack_require__(/*! ./project-manager */ "./src/app/project-management/project-managers/queries/project-manager/index.ts");
const project_manager_options_1 = __webpack_require__(/*! ./project-manager-options */ "./src/app/project-management/project-managers/queries/project-manager-options/index.ts");
const project_managers_1 = __webpack_require__(/*! ./project-managers */ "./src/app/project-management/project-managers/queries/project-managers/index.ts");
exports.queryHandlers = [project_manager_options_1.ProjectManagerOptionsQueryHandler, project_managers_1.ProjectManagersHandler, project_manager_1.ProjectManagerHandler, is_project_manager_1.IsProjectManagerHandler];


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/index.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/project-management/project-managers/queries/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./is-project-manager */ "./src/app/project-management/project-managers/queries/is-project-manager/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./project-manager */ "./src/app/project-management/project-managers/queries/project-manager/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./project-manager-options */ "./src/app/project-management/project-managers/queries/project-manager-options/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./project-managers */ "./src/app/project-management/project-managers/queries/project-managers/index.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/is-project-manager/index.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/is-project-manager/index.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./is-project-manager.handler */ "./src/app/project-management/project-managers/queries/is-project-manager/is-project-manager.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./is-project-manager.query */ "./src/app/project-management/project-managers/queries/is-project-manager/is-project-manager.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/is-project-manager/is-project-manager.handler.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/is-project-manager/is-project-manager.handler.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsProjectManagerHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const is_project_manager_query_1 = __webpack_require__(/*! ./is-project-manager.query */ "./src/app/project-management/project-managers/queries/is-project-manager/is-project-manager.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let IsProjectManagerHandler = class IsProjectManagerHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        OPTIONAL MATCH (pm:ProjectManager)
            WHERE pm.id = $id
        RETURN CASE
            WHEN pm IS NULL THEN false
            ELSE true
        END AS result
    `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, query);
        return queryResult.records[0].get('result');
    }
};
exports.IsProjectManagerHandler = IsProjectManagerHandler;
exports.IsProjectManagerHandler = IsProjectManagerHandler = __decorate([
    (0, cqrs_1.QueryHandler)(is_project_manager_query_1.IsProjectManagerQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], IsProjectManagerHandler);


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/is-project-manager/is-project-manager.query.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/is-project-manager/is-project-manager.query.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsProjectManagerQuery = void 0;
class IsProjectManagerQuery {
    constructor(id) {
        this.id = id;
    }
}
exports.IsProjectManagerQuery = IsProjectManagerQuery;


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/project-manager-options/index.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/project-manager-options/index.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./project-manager-options.handler */ "./src/app/project-management/project-managers/queries/project-manager-options/project-manager-options.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./project-manager-options.query */ "./src/app/project-management/project-managers/queries/project-manager-options/project-manager-options.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/project-manager-options/project-manager-options.handler.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/project-manager-options/project-manager-options.handler.ts ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagerOptionsQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const project_manager_options_query_1 = __webpack_require__(/*! ./project-manager-options.query */ "./src/app/project-management/project-managers/queries/project-manager-options/project-manager-options.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ProjectManagerOptionsQueryHandler = class ProjectManagerOptionsQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (pm:ProjectManager)
        WITH pm ORDER BY pm.name
        RETURN {
            id: pm.id,
            name: pm.name,
            color: pm.color
        } AS projectManager
   `;
    }
    async execute() {
        const queryResult = await this.client.read(this.query);
        const response = queryResult.records.map((d) => d.get('projectManager'));
        return response;
    }
};
exports.ProjectManagerOptionsQueryHandler = ProjectManagerOptionsQueryHandler;
exports.ProjectManagerOptionsQueryHandler = ProjectManagerOptionsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(project_manager_options_query_1.ProjectManagerOptionsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ProjectManagerOptionsQueryHandler);


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/project-manager-options/project-manager-options.query.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/project-manager-options/project-manager-options.query.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagerOptionsQuery = void 0;
class ProjectManagerOptionsQuery {
    constructor() { }
}
exports.ProjectManagerOptionsQuery = ProjectManagerOptionsQuery;
;


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/project-manager/index.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/project-manager/index.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./project-manager.handler */ "./src/app/project-management/project-managers/queries/project-manager/project-manager.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./project-manager.query */ "./src/app/project-management/project-managers/queries/project-manager/project-manager.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/project-manager/project-manager.handler.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/project-manager/project-manager.handler.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagerHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const project_manager_query_1 = __webpack_require__(/*! ./project-manager.query */ "./src/app/project-management/project-managers/queries/project-manager/project-manager.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ProjectManagerHandler = class ProjectManagerHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (pm:ProjectManager {id: $id})

        CALL {
            WITH pm
            RETURN CASE
                WHEN "Resource" IN labels(pm)
                    THEN true
                ELSE false
            END AS isResource
        }

        CALL {
            WITH pm
            RETURN CASE
                WHEN "User" IN labels(pm)
                    THEN true
                ELSE false
            END AS isUser
        }


        RETURN {
            id: pm.id,
            name: pm.name,
            color: pm.color,
            isResource: isResource,
            isUser: isUser
        } AS projectManager
    `;
    }
    async execute(query) {
        const result = await this.client.read(this.query, { id: query.id });
        return result.records[0].get('projectManager');
    }
};
exports.ProjectManagerHandler = ProjectManagerHandler;
exports.ProjectManagerHandler = ProjectManagerHandler = __decorate([
    (0, cqrs_1.QueryHandler)(project_manager_query_1.ProjectManagerQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ProjectManagerHandler);


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/project-manager/project-manager.query.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/project-manager/project-manager.query.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagerQuery = void 0;
class ProjectManagerQuery {
    constructor(id) {
        this.id = id;
    }
}
exports.ProjectManagerQuery = ProjectManagerQuery;


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/project-managers/index.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/project-managers/index.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./project-managers.handler */ "./src/app/project-management/project-managers/queries/project-managers/project-managers.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./project-managers.query */ "./src/app/project-management/project-managers/queries/project-managers/project-managers.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/project-managers/project-managers.handler.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/project-managers/project-managers.handler.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagersHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const project_managers_query_1 = __webpack_require__(/*! ./project-managers.query */ "./src/app/project-management/project-managers/queries/project-managers/project-managers.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ProjectManagersHandler = class ProjectManagersHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (pm:ProjectManager)
            WHERE pm.name <> "Ingen"
        WITH pm ORDER BY pm.name

        RETURN {
            id: pm.id,
            name: pm.name,
            color: pm.color
        } AS projectManager
    
    `;
    }
    async execute(query) {
        const result = await this.client.read(this.query);
        return result.records.map((r) => r.get('projectManager'));
    }
};
exports.ProjectManagersHandler = ProjectManagersHandler;
exports.ProjectManagersHandler = ProjectManagersHandler = __decorate([
    (0, cqrs_1.QueryHandler)(project_managers_query_1.ProjectManagersQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ProjectManagersHandler);


/***/ }),

/***/ "./src/app/project-management/project-managers/queries/project-managers/project-managers.query.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/project-management/project-managers/queries/project-managers/project-managers.query.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagersQuery = void 0;
class ProjectManagersQuery {
    constructor() { }
}
exports.ProjectManagersQuery = ProjectManagersQuery;


/***/ }),

/***/ "./src/app/project-management/team/commands/add-team-member/add-team-member.command.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/project-management/team/commands/add-team-member/add-team-member.command.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddTeamMemberCommand = void 0;
class AddTeamMemberCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.AddTeamMemberCommand = AddTeamMemberCommand;


/***/ }),

/***/ "./src/app/project-management/team/commands/add-team-member/add-team-member.handler.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/project-management/team/commands/add-team-member/add-team-member.handler.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddTeamMemberHandler = void 0;
const add_team_member_command_1 = __webpack_require__(/*! ./add-team-member.command */ "./src/app/project-management/team/commands/add-team-member/add-team-member.command.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let AddTeamMemberHandler = class AddTeamMemberHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (p:Plan)
            WHERE p.id = $planId
        MATCH (a:Agent)
            WHERE a.id = $agentId
        MERGE result = (a)-[:IS_ASSIGNED_TO {timestamp: timestamp(), uid: $uid}]->(p)
        RETURN result
    `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        if (result) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'team-member.added',
            });
            return new _shared_1.FormSuccessResponse({
                message: 'Teammedlemmet blev tilføjet.',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Der skete en fejl under tilføjelse af teammedlemmet.',
        });
    }
};
exports.AddTeamMemberHandler = AddTeamMemberHandler;
exports.AddTeamMemberHandler = AddTeamMemberHandler = __decorate([
    (0, cqrs_1.CommandHandler)(add_team_member_command_1.AddTeamMemberCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], AddTeamMemberHandler);


/***/ }),

/***/ "./src/app/project-management/team/commands/add-team-member/index.ts":
/*!***************************************************************************!*\
  !*** ./src/app/project-management/team/commands/add-team-member/index.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./add-team-member.command */ "./src/app/project-management/team/commands/add-team-member/add-team-member.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./add-team-member.handler */ "./src/app/project-management/team/commands/add-team-member/add-team-member.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/team/commands/handlers.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-management/team/commands/handlers.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commandHandlers = void 0;
const add_team_member_1 = __webpack_require__(/*! ./add-team-member */ "./src/app/project-management/team/commands/add-team-member/index.ts");
const remove_team_member_1 = __webpack_require__(/*! ./remove-team-member */ "./src/app/project-management/team/commands/remove-team-member/index.ts");
const swap_team_member_1 = __webpack_require__(/*! ./swap-team-member */ "./src/app/project-management/team/commands/swap-team-member/index.ts");
exports.commandHandlers = [add_team_member_1.AddTeamMemberHandler, swap_team_member_1.SwapTeamMemberHandler, remove_team_member_1.RemoveTeamMemberHandler];


/***/ }),

/***/ "./src/app/project-management/team/commands/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/project-management/team/commands/index.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/project-management/team/commands/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./add-team-member */ "./src/app/project-management/team/commands/add-team-member/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./remove-team-member */ "./src/app/project-management/team/commands/remove-team-member/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./swap-team-member */ "./src/app/project-management/team/commands/swap-team-member/index.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/team/commands/remove-team-member/index.ts":
/*!******************************************************************************!*\
  !*** ./src/app/project-management/team/commands/remove-team-member/index.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./remove-team-member.command */ "./src/app/project-management/team/commands/remove-team-member/remove-team-member.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./remove-team-member.handler */ "./src/app/project-management/team/commands/remove-team-member/remove-team-member.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/team/commands/remove-team-member/remove-team-member.command.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/project-management/team/commands/remove-team-member/remove-team-member.command.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveTeamMemberCommand = void 0;
class RemoveTeamMemberCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.RemoveTeamMemberCommand = RemoveTeamMemberCommand;


/***/ }),

/***/ "./src/app/project-management/team/commands/remove-team-member/remove-team-member.handler.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/project-management/team/commands/remove-team-member/remove-team-member.handler.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveTeamMemberHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const remove_team_member_command_1 = __webpack_require__(/*! ./remove-team-member.command */ "./src/app/project-management/team/commands/remove-team-member/remove-team-member.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let RemoveTeamMemberHandler = class RemoveTeamMemberHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (pl:Plan)<-[rel:IS_ASSIGNED_TO]-(agent:Agent)
            WHERE pl.id = $planId
            AND agent.id = $agentId
            
        CALL {
            WITH rel
            DELETE rel
        }
        CALL {
            WITH agent, pl
            MATCH (t:Task)<-[rel:IS_ASSIGNED_TO]-(agent)
                WHERE (t)<-[:HAS*2]-(pl)
            DELETE rel
        }
        CALL {
            WITH agent, pl
            MATCH (a:Allocation)<-[:IS_ASSIGNED_TO]-(agent)
                WHERE (a)<-[:HAS*3]-(pl)
            DETACH DELETE a
        }
   `;
    }
    async execute(command) {
        const result = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        if (result.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'team-member.removed',
            });
            return new _shared_1.FormSuccessResponse({
                message: 'Teammedlemmet blev fjernet.',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Der skete en fejl under fjernelse af teammedlemmet.',
        });
    }
};
exports.RemoveTeamMemberHandler = RemoveTeamMemberHandler;
exports.RemoveTeamMemberHandler = RemoveTeamMemberHandler = __decorate([
    (0, cqrs_1.CommandHandler)(remove_team_member_command_1.RemoveTeamMemberCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], RemoveTeamMemberHandler);


/***/ }),

/***/ "./src/app/project-management/team/commands/swap-team-member/index.ts":
/*!****************************************************************************!*\
  !*** ./src/app/project-management/team/commands/swap-team-member/index.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./swap-team-member.command */ "./src/app/project-management/team/commands/swap-team-member/swap-team-member.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./swap-team-member.handler */ "./src/app/project-management/team/commands/swap-team-member/swap-team-member.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/team/commands/swap-team-member/swap-team-member.command.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/project-management/team/commands/swap-team-member/swap-team-member.command.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwapTeamMemberCommand = void 0;
class SwapTeamMemberCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.SwapTeamMemberCommand = SwapTeamMemberCommand;


/***/ }),

/***/ "./src/app/project-management/team/commands/swap-team-member/swap-team-member.handler.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/project-management/team/commands/swap-team-member/swap-team-member.handler.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwapTeamMemberHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const swap_team_member_command_1 = __webpack_require__(/*! ./swap-team-member.command */ "./src/app/project-management/team/commands/swap-team-member/swap-team-member.command.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
let SwapTeamMemberHandler = class SwapTeamMemberHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (w:Workpackage)--(plan:Plan)
            WHERE w.id = $workpackageId

        MATCH (fromAgent:Agent)-[pRel:IS_ASSIGNED_TO]->(plan)
            WHERE fromAgent.id = $fromAgent
        MATCH (toAgent:Agent)
            WHERE toAgent.id = $toAgent


        CALL {
            WITH fromAgent, plan, toAgent
            MATCH (fromAgent)-[aRel:IS_ASSIGNED_TO]->(a:Allocation)<-[:HAS*3]-(plan)
            CALL apoc.refactor.from(aRel, toAgent)
            YIELD output
            RETURN {} AS nothing
        }

        CALL {
            WITH fromAgent, plan, toAgent
            MATCH (fromAgent)-[tRel:IS_ASSIGNED_TO]->(t:Task)<-[:HAS*2]-(plan)
            DELETE tRel
    
            WITH collect(t) AS tasks
            RETURN tasks
        }

        CALL {
            WITH tasks, toAgent
            UNWIND tasks AS t
                MERGE (toAgent)-[:IS_ASSIGNED_TO]->(t)
        }

        

        RETURN {} AS result
    `;
    }
    async execute({ dto, uid }) {
        const result = await this.client.write(this.query, {
            workpackageId: dto.workpackageId,
            fromAgent: dto.fromAgent,
            toAgent: dto.toAgent,
        });
        this.publisher.publish({
            ...dto,
            uid: uid,
            type: 'team-member.swapped',
        });
        return new _shared_1.FormSuccessResponse({
            message: 'Teammedlemmet blev udskiftet.',
        });
    }
};
exports.SwapTeamMemberHandler = SwapTeamMemberHandler;
exports.SwapTeamMemberHandler = SwapTeamMemberHandler = __decorate([
    (0, cqrs_1.CommandHandler)(swap_team_member_command_1.SwapTeamMemberCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], SwapTeamMemberHandler);


/***/ }),

/***/ "./src/app/project-management/team/queries/handlers.ts":
/*!*************************************************************!*\
  !*** ./src/app/project-management/team/queries/handlers.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const workpackage_team_1 = __webpack_require__(/*! ./workpackage-team */ "./src/app/project-management/team/queries/workpackage-team/index.ts");
const team_options_1 = __webpack_require__(/*! ./team-options */ "./src/app/project-management/team/queries/team-options/index.ts");
exports.queryHandlers = [workpackage_team_1.WorkpackageTeamQueryHandler, team_options_1.TeamOptionsQueryHandler];


/***/ }),

/***/ "./src/app/project-management/team/queries/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/project-management/team/queries/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/project-management/team/queries/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackage-team */ "./src/app/project-management/team/queries/workpackage-team/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./team-options */ "./src/app/project-management/team/queries/team-options/index.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/team/queries/team-options/index.ts":
/*!***********************************************************************!*\
  !*** ./src/app/project-management/team/queries/team-options/index.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./team-options.handler */ "./src/app/project-management/team/queries/team-options/team-options.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./team-options.query */ "./src/app/project-management/team/queries/team-options/team-options.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/team/queries/team-options/team-options.handler.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/project-management/team/queries/team-options/team-options.handler.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamOptionsQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const team_options_query_1 = __webpack_require__(/*! ./team-options.query */ "./src/app/project-management/team/queries/team-options/team-options.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let TeamOptionsQueryHandler = class TeamOptionsQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (a:Agent)
           WHERE NOT (a)-[*2]-(:Workpackage {id: $workpackageId})
        MATCH (r:Resource)<-[:IS]-(a)-[:IS]->(rt:ResourceType)
        WITH {
            id: a.id,
            resource: {
                id: r.id,
                name: r.name,
                color: r.color,
                costRate: {
                    default: r.costDefault,
                    overtime: r.costOvertime
                }
            },
            resourceType: {
                id: rt.id,
                name: rt.name,
                typeNo: rt.typeNo,
                abbrevation: rt.abbrevation,
                salesRate: {
                    default: rt.salesDefault,
                    overtime: rt.salesOvertime
                }
            }
        } AS option
        ORDER BY option.resource.name
        WITH collect(option) AS options
        RETURN options
   `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, {
            workpackageId: query.workpackageId,
        });
        const response = queryResult.records[0].get('options');
        return response;
    }
};
exports.TeamOptionsQueryHandler = TeamOptionsQueryHandler;
exports.TeamOptionsQueryHandler = TeamOptionsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(team_options_query_1.TeamOptionsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], TeamOptionsQueryHandler);


/***/ }),

/***/ "./src/app/project-management/team/queries/team-options/team-options.query.ts":
/*!************************************************************************************!*\
  !*** ./src/app/project-management/team/queries/team-options/team-options.query.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamOptionsQuery = void 0;
class TeamOptionsQuery {
    constructor(workpackageId) {
        this.workpackageId = workpackageId;
    }
}
exports.TeamOptionsQuery = TeamOptionsQuery;
;


/***/ }),

/***/ "./src/app/project-management/team/queries/workpackage-team/index.ts":
/*!***************************************************************************!*\
  !*** ./src/app/project-management/team/queries/workpackage-team/index.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./workpackage-team.handler */ "./src/app/project-management/team/queries/workpackage-team/workpackage-team.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackage-team.query, */ "./src/app/project-management/team/queries/workpackage-team/workpackage-team.query,.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/team/queries/workpackage-team/workpackage-team.handler.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/project-management/team/queries/workpackage-team/workpackage-team.handler.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackageTeamQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const workpackage_team_query_1 = __webpack_require__(/*! ./workpackage-team.query, */ "./src/app/project-management/team/queries/workpackage-team/workpackage-team.query,.ts");
let WorkpackageTeamQueryHandler = class WorkpackageTeamQueryHandler {
    execute(query) {
        throw new Error("Method not implemented.");
    }
};
exports.WorkpackageTeamQueryHandler = WorkpackageTeamQueryHandler;
exports.WorkpackageTeamQueryHandler = WorkpackageTeamQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(workpackage_team_query_1.WorkpackageTeamQuery)
], WorkpackageTeamQueryHandler);


/***/ }),

/***/ "./src/app/project-management/team/queries/workpackage-team/workpackage-team.query,.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/project-management/team/queries/workpackage-team/workpackage-team.query,.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackageTeamQuery = void 0;
class WorkpackageTeamQuery {
    constructor(workpackageId) {
        this.workpackageId = workpackageId;
    }
}
exports.WorkpackageTeamQuery = WorkpackageTeamQuery;


/***/ }),

/***/ "./src/app/project-management/team/team.module.ts":
/*!********************************************************!*\
  !*** ./src/app/project-management/team/team.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/project-management/team/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/project-management/team/queries/index.ts");
const team_service_1 = __webpack_require__(/*! ./team.service */ "./src/app/project-management/team/team.service.ts");
let TeamModule = class TeamModule {
};
exports.TeamModule = TeamModule;
exports.TeamModule = TeamModule = __decorate([
    (0, common_1.Module)({
        providers: [...commands_1.commandHandlers, ...queries_1.queryHandlers, team_service_1.TeamService],
        exports: [team_service_1.TeamService],
    })
], TeamModule);


/***/ }),

/***/ "./src/app/project-management/team/team.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/project-management/team/team.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/project-management/team/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/project-management/team/queries/index.ts");
let TeamService = class TeamService {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async addTeamMember(dto, uid) {
        return await this.commandBus.execute(new commands_1.AddTeamMemberCommand(dto, uid));
    }
    async removeTeamMember(dto, uid) {
        return await this.commandBus.execute(new commands_1.RemoveTeamMemberCommand(dto, uid));
    }
    async swapTeamMember(dto, uid) {
        return await this.commandBus.execute(new commands_1.SwapTeamMemberCommand(dto, uid));
    }
    async getWorkpackageTeam(workpackageId) {
        return await this.queryBus.execute(new queries_1.WorkpackageTeamQuery(workpackageId));
    }
    async getTeamOptions(workpackageId) {
        return await this.queryBus.execute(new queries_1.TeamOptionsQuery(workpackageId));
    }
};
exports.TeamService = TeamService;
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], TeamService);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/create-workpackage/create-workpackage.command.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/create-workpackage/create-workpackage.command.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateWorkpackageCommand = void 0;
class CreateWorkpackageCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateWorkpackageCommand = CreateWorkpackageCommand;


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/create-workpackage/create-workpackage.handler.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/create-workpackage/create-workpackage.handler.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateWorkpackageHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_workpackage_command_1 = __webpack_require__(/*! ./create-workpackage.command */ "./src/app/project-management/workpackages/commands/create-workpackage/create-workpackage.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const queries_1 = __webpack_require__(/*! ../../queries */ "./src/app/project-management/workpackages/queries/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let CreateWorkpackageHandler = class CreateWorkpackageHandler {
    constructor(client, validate, publisher) {
        this.client = client;
        this.validate = validate;
        this.publisher = publisher;
        this.query = `
        MATCH (u:User {uid: $uid})
        CREATE (w:Workpackage {
            id: apoc.create.uuid(),
            name: $name,
            description: $description,
            serialNo: $serialNo,
            systematicName: $systematicName
        })
        MERGE (u)-[:CREATED_BY {timestamp: timestamp()}]->(u)
        WITH w

        CALL {
            WITH w
            MATCH (s:Stage)
                WHERE s.name = $stage
            MERGE (w)-[:AT_STAGE {modifiedAt: timestamp(), modifiedBy: $uid}]->(s)
            RETURN s{.*} AS stage
        }

        CALL {
            WITH w
            MATCH (c:Contract {id: $contract})
            MERGE (w)-[:IS_UNDER]->(c)
            RETURN c{.*} AS contract
        }

        CALL {
            WITH w
            MATCH (f:FinancialSource {id: $financialSource})
            MERGE (w)-[:IS_FINANCED_BY]->(f)
            RETURN f{.*} AS financialSource
        }
        CALL {
            WITH w
            MATCH (b:BookingStage {name: "Ingen"})
            MERGE (w)-[:AT {updatedAt: timestamp(), uid: $uid}]->(b)
        }

        CALL {
            WITH w
            CREATE (pl:Plan:Activity {
                id: apoc.create.uuid(),
                startDate: date($startDate),
                endDate: date($endDate),
                cost: 0,
                sales: 0,
                profit: 0,
                coverage: 0,
                defaultWork: 0,
                overtimeWork: 0,
                totalWork: 0
            })
            RETURN pl
        }
        CALL {
            WITH pl
            MATCH (pm:ProjectManager)
                WHERE pm.id = $projectManager
            MERGE (pm)-[:MANAGES]->(pl)
        }


    MERGE (pl)-[:CREATED_BY {timestamp: timestamp()}]->(u)
    MERGE (w)-[:HAS]->(pl)
        

        RETURN {
            workpackage: w{.*},
            contract: contract,
            financialSource: financialSource,
            stage: stage,
            plan: pl
        } AS result
        `;
    }
    async execute(command) {
        const systematicName = await this.validate.execute(new queries_1.ValidateSystematicNameQuery(command.dto.contract, command.dto.financialSource, command.dto.serialNo));
        if (systematicName instanceof _shared_1.FormErrorResponse) {
            return systematicName;
        }
        const queryResult = await this.client.write(this.query, {
            name: command.dto.name ?? '',
            description: command.dto.description ?? '',
            serialNo: command.dto.serialNo,
            contract: command.dto.contract,
            financialSource: command.dto.financialSource,
            systematicName: systematicName,
            projectManager: command.dto.projectManager,
            startDate: command.dto.startDate,
            endDate: command.dto.endDate,
            stage: command.dto.stage,
            uid: command.uid,
        });
        const result = queryResult.records[0]?.get('result');
        if (result) {
            this.publisher.publish({
                ...command.dto,
                systematicName: systematicName,
                uid: command.uid,
                workpackageId: result.workpackage.id,
                planId: result.plan.id,
                type: 'workpackage.created',
            });
            return new _shared_1.FormSuccessResponse({
                id: result.workpackage.id,
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Arbejdspakken blev ikke oprettet.',
        });
    }
};
exports.CreateWorkpackageHandler = CreateWorkpackageHandler;
exports.CreateWorkpackageHandler = CreateWorkpackageHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_workpackage_command_1.CreateWorkpackageCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof queries_1.ValidateSystematicNameQueryHandler !== "undefined" && queries_1.ValidateSystematicNameQueryHandler) === "function" ? _b : Object, typeof (_c = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _c : Object])
], CreateWorkpackageHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/create-workpackage/index.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/create-workpackage/index.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-workpackage.command */ "./src/app/project-management/workpackages/commands/create-workpackage/create-workpackage.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-workpackage.handler */ "./src/app/project-management/workpackages/commands/create-workpackage/create-workpackage.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/delete-workpackage/delete-workpackage.command.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/delete-workpackage/delete-workpackage.command.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteWorkpackageCommand = void 0;
class DeleteWorkpackageCommand {
    constructor(workpackageId, uid) {
        this.workpackageId = workpackageId;
        this.uid = uid;
    }
}
exports.DeleteWorkpackageCommand = DeleteWorkpackageCommand;


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/delete-workpackage/delete-workpackage.handler.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/delete-workpackage/delete-workpackage.handler.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteWorkpackageHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const delete_workpackage_command_1 = __webpack_require__(/*! ./delete-workpackage.command */ "./src/app/project-management/workpackages/commands/delete-workpackage/delete-workpackage.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let DeleteWorkpackageHandler = class DeleteWorkpackageHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
       MATCH (w:Workpackage)
            WHERE w.id = $workpackageId
        CALL {
            WITH w
            OPTIONAL MATCH (w)-[*1..4]->(a:Activity)
            DETACH DELETE a
        }
        CALL {
            WITH w
            MATCH (w)--(p:Proposition)
            OPTIONAL MATCH (p)--(prop:Proposal)
            OPTIONAL MATCH (p)-[*1..4]-(f:Snapshot)
            DETACH DELETE f
            DETACH DELETE prop
            DETACH DELETE p
        }
        DETACH DELETE w
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            workpackageId: command.workpackageId,
            uid: command.uid,
        });
        if (queryResult.summary.counters.containsUpdates()) {
            this.publisher.publish({
                ...command,
                type: 'workpackage.deleted',
            });
            return new _shared_1.FormSuccessResponse({
                message: 'Arbejdspakken blev slettet.',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Der skete en fejl under sletningen af arbejdspakken.',
        });
    }
};
exports.DeleteWorkpackageHandler = DeleteWorkpackageHandler;
exports.DeleteWorkpackageHandler = DeleteWorkpackageHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_workpackage_command_1.DeleteWorkpackageCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], DeleteWorkpackageHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/delete-workpackage/index.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/delete-workpackage/index.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./delete-workpackage.command */ "./src/app/project-management/workpackages/commands/delete-workpackage/delete-workpackage.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-workpackage.handler */ "./src/app/project-management/workpackages/commands/delete-workpackage/delete-workpackage.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/handlers.ts":
/*!**********************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/handlers.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commandHandlers = void 0;
const create_workpackage_1 = __webpack_require__(/*! ./create-workpackage */ "./src/app/project-management/workpackages/commands/create-workpackage/index.ts");
const delete_workpackage_1 = __webpack_require__(/*! ./delete-workpackage */ "./src/app/project-management/workpackages/commands/delete-workpackage/index.ts");
const update_booking_stage_1 = __webpack_require__(/*! ./update-booking-stage */ "./src/app/project-management/workpackages/commands/update-booking-stage/index.ts");
const update_stage_1 = __webpack_require__(/*! ./update-stage */ "./src/app/project-management/workpackages/commands/update-stage/index.ts");
const update_workpackage_1 = __webpack_require__(/*! ./update-workpackage */ "./src/app/project-management/workpackages/commands/update-workpackage/index.ts");
exports.commandHandlers = [
    create_workpackage_1.CreateWorkpackageHandler,
    update_workpackage_1.UpdateWorkpackageHandler,
    delete_workpackage_1.DeleteWorkpackageHandler,
    update_booking_stage_1.UpdateBookingStageHandler,
    update_stage_1.UpdateStageHandler
];


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/index.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/project-management/workpackages/commands/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-workpackage */ "./src/app/project-management/workpackages/commands/create-workpackage/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-workpackage */ "./src/app/project-management/workpackages/commands/delete-workpackage/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-booking-stage */ "./src/app/project-management/workpackages/commands/update-booking-stage/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-stage */ "./src/app/project-management/workpackages/commands/update-stage/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-workpackage */ "./src/app/project-management/workpackages/commands/update-workpackage/index.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/update-booking-stage/index.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/update-booking-stage/index.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-booking-stage.command */ "./src/app/project-management/workpackages/commands/update-booking-stage/update-booking-stage.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-booking-stage.handler */ "./src/app/project-management/workpackages/commands/update-booking-stage/update-booking-stage.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/update-booking-stage/update-booking-stage.command.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/update-booking-stage/update-booking-stage.command.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBookingStageCommand = void 0;
class UpdateBookingStageCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateBookingStageCommand = UpdateBookingStageCommand;


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/update-booking-stage/update-booking-stage.handler.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/update-booking-stage/update-booking-stage.handler.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBookingStageHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_booking_stage_command_1 = __webpack_require__(/*! ./update-booking-stage.command */ "./src/app/project-management/workpackages/commands/update-booking-stage/update-booking-stage.command.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
let UpdateBookingStageHandler = class UpdateBookingStageHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (w:Workpackage)-[rel:AT]->(b:BookingStage)
                WHERE w.id = $workpackageId
        MATCH (newStage:BookingStage)
            WHERE newStage.name = $bookingStage

        CALL {
            WITH rel, newStage
            CALL apoc.refactor.to(rel, newStage)
            YIELD output
    
            SET output += {
                updatedAt: timestamp(),
                uid: $uid
            }
            RETURN output
        }
        RETURN b.id as prevStage
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const prevStage = queryResult.records[0].get('prevStage');
        this.publisher.publish({
            prevStage: prevStage,
            newStage: command.dto.bookingStage,
            workPackageId: command.dto.workpackageId,
            uid: command.uid,
            type: 'booking-stage.updated',
        });
        return new _shared_1.FormSuccessResponse({
            message: 'Bookingstadiet blev opdateret',
        });
    }
};
exports.UpdateBookingStageHandler = UpdateBookingStageHandler;
exports.UpdateBookingStageHandler = UpdateBookingStageHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_booking_stage_command_1.UpdateBookingStageCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], UpdateBookingStageHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/update-stage/index.ts":
/*!********************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/update-stage/index.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-stage.command */ "./src/app/project-management/workpackages/commands/update-stage/update-stage.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-stage.handler */ "./src/app/project-management/workpackages/commands/update-stage/update-stage.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/update-stage/update-stage.command.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/update-stage/update-stage.command.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateStageCommand = void 0;
class UpdateStageCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateStageCommand = UpdateStageCommand;


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/update-stage/update-stage.handler.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/update-stage/update-stage.handler.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateStageHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_stage_command_1 = __webpack_require__(/*! ./update-stage.command */ "./src/app/project-management/workpackages/commands/update-stage/update-stage.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdateStageHandler = class UpdateStageHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (w:Workpackage)-[sr:AT_STAGE]-(oldStage:Stage)
            WHERE w.id = $workpackageId
        MATCH (newStage: Stage)
            WHERE newStage.name = $stage
        CALL apoc.refactor.to(sr, newStage)
        YIELD output
        SET output += {
            modifiedBy: $uid,
            modifiedAt: timestamp()
        }
        RETURN {
            workpackage: w{.*},
            fromStage: oldStage.name,
            newStage: newStage.name
        } AS result
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        this.publisher.publish({
            prevStage: result.fromStage,
            newStage: result.newStage,
            workPackageId: result.workpackage.id,
            uid: command.uid,
            type: 'stage.updated',
        });
        return new _shared_1.FormSuccessResponse({ message: 'Stadiet blev ændret' });
    }
};
exports.UpdateStageHandler = UpdateStageHandler;
exports.UpdateStageHandler = UpdateStageHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_stage_command_1.UpdateStageCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], UpdateStageHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/update-workpackage/index.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/update-workpackage/index.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-workpackage.command */ "./src/app/project-management/workpackages/commands/update-workpackage/update-workpackage.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-workpackage.handler */ "./src/app/project-management/workpackages/commands/update-workpackage/update-workpackage.handler.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/update-workpackage/update-workpackage.command.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/update-workpackage/update-workpackage.command.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateWorkpackageCommand = void 0;
class UpdateWorkpackageCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateWorkpackageCommand = UpdateWorkpackageCommand;


/***/ }),

/***/ "./src/app/project-management/workpackages/commands/update-workpackage/update-workpackage.handler.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/commands/update-workpackage/update-workpackage.handler.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateWorkpackageHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_workpackage_command_1 = __webpack_require__(/*! ./update-workpackage.command */ "./src/app/project-management/workpackages/commands/update-workpackage/update-workpackage.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const queries_1 = __webpack_require__(/*! ../../queries */ "./src/app/project-management/workpackages/queries/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdateWorkpackageHandler = class UpdateWorkpackageHandler {
    constructor(client, validate, publisher) {
        this.client = client;
        this.validate = validate;
        this.publisher = publisher;
        this.query = `
        MATCH (w:Workpackage)
            WHERE w.id = $workpackageId
        SET w += {
            name: $name,
            description: $description,
            serialNo: $serialNo,
            systematicName: $systematicName
        }
        WITH w

        CALL {
            WITH w
            MATCH (w)-[rel]-(:Contract)
            MATCH (c:Contract)
                WHERE c.id = $contractId

            CALL apoc.refactor.to(rel, c)
            YIELD output
            RETURN output
        }
        
        CALL {
            WITH w
            MATCH (f)-[rel]-(:FinancialSource)
            MATCH (f:FinancialSource)
                WHERE f.id = $financialSourceId
            CALL apoc.refactor.to(rel, f)
            YIELD output
            RETURN output as output1
        }

        RETURN {} AS result
   `;
    }
    async execute(command) {
        const systematicName = await this.validate.execute(new queries_1.ValidateSystematicNameQuery(command.dto.contractId, command.dto.financialSourceId, command.dto.serialNo, command.dto.workpackageId));
        if (typeof systematicName !== 'string') {
            return systematicName;
        }
        const result = await this.client.write(this.query, {
            ...command.dto,
            systematicName: systematicName,
            uid: command.uid,
        });
        if (result.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                systematicName: systematicName,
                uid: command.uid,
                type: 'workpackage.updated',
            });
            return new _shared_1.FormSuccessResponse({
                message: 'Arbejdspakkens blev opdateret.',
            });
        }
        return new _shared_1.FormErrorResponse({
            message: 'Arbejdspakkens blev ikke opdateret.',
        });
    }
};
exports.UpdateWorkpackageHandler = UpdateWorkpackageHandler;
exports.UpdateWorkpackageHandler = UpdateWorkpackageHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_workpackage_command_1.UpdateWorkpackageCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof queries_1.ValidateSystematicNameQueryHandler !== "undefined" && queries_1.ValidateSystematicNameQueryHandler) === "function" ? _b : Object, typeof (_c = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _c : Object])
], UpdateWorkpackageHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/project-management/workpackages/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./workpackages.module */ "./src/app/project-management/workpackages/workpackages.module.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/handlers.ts":
/*!*********************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/handlers.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const project_manager_workpackages_1 = __webpack_require__(/*! ./project-manager-workpackages */ "./src/app/project-management/workpackages/queries/project-manager-workpackages/index.ts");
const stages_1 = __webpack_require__(/*! ./stages */ "./src/app/project-management/workpackages/queries/stages/index.ts");
const validate_systematic_name_1 = __webpack_require__(/*! ./validate-systematic-name */ "./src/app/project-management/workpackages/queries/validate-systematic-name/index.ts");
const workpackage_create_form_1 = __webpack_require__(/*! ./workpackage-create-form */ "./src/app/project-management/workpackages/queries/workpackage-create-form/index.ts");
const workpackages_view_1 = __webpack_require__(/*! ./workpackages-view */ "./src/app/project-management/workpackages/queries/workpackages-view/index.ts");
const workpackge_profile_1 = __webpack_require__(/*! ./workpackge-profile */ "./src/app/project-management/workpackages/queries/workpackge-profile/index.ts");
exports.queryHandlers = [
    validate_systematic_name_1.ValidateSystematicNameQueryHandler,
    workpackages_view_1.WorkpackageViewQueryHandler,
    workpackge_profile_1.WorkpackageProfileQueryHandler,
    stages_1.StagesQueryHandler,
    workpackage_create_form_1.WorkpackageCreateFormQueryHandler,
    project_manager_workpackages_1.ProjectManagerWorkpackagesHandler
];


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/index.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/project-management/workpackages/queries/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./project-manager-workpackages */ "./src/app/project-management/workpackages/queries/project-manager-workpackages/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./stages */ "./src/app/project-management/workpackages/queries/stages/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./validate-systematic-name */ "./src/app/project-management/workpackages/queries/validate-systematic-name/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackage-create-form */ "./src/app/project-management/workpackages/queries/workpackage-create-form/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackage-form-options */ "./src/app/project-management/workpackages/queries/workpackage-form-options/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackages-view */ "./src/app/project-management/workpackages/queries/workpackages-view/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackge-profile */ "./src/app/project-management/workpackages/queries/workpackge-profile/index.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/project-manager-workpackages/index.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/project-manager-workpackages/index.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./project-manager-workpackages.handler */ "./src/app/project-management/workpackages/queries/project-manager-workpackages/project-manager-workpackages.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./project-manager-workpackages.query */ "./src/app/project-management/workpackages/queries/project-manager-workpackages/project-manager-workpackages.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/project-manager-workpackages/project-manager-workpackages.handler.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/project-manager-workpackages/project-manager-workpackages.handler.ts ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagerWorkpackagesHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const project_manager_workpackages_query_1 = __webpack_require__(/*! ./project-manager-workpackages.query */ "./src/app/project-management/workpackages/queries/project-manager-workpackages/project-manager-workpackages.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ProjectManagerWorkpackagesHandler = class ProjectManagerWorkpackagesHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (w:Workpackage)--(plan:Plan)
            WHERE (plan)<-[:MANAGES]-(:ProjectManager {id: $id})

        CALL {
            WITH plan
            OPTIONAL MATCH (plan)<-[:IS_ASSIGNED_TO]-(:Agent)-[:IS]->(r:Resource)
            WITH collect({
                id: r.id,
                name: r.name,
                color: r.color
                }) AS team
            RETURN CASE
                WHEN team[0].id IS NULL THEN []
                ELSE team
            END AS team

        }


        CALL {
            WITH w
            RETURN
                w.id AS id,
                w.serialNo AS serialNo,
                w.systematicName AS systematicName,
                w.name AS name
        }

        CALL {
            WITH w
            MATCH (w)--(c:Contract)
            RETURN {
                id: c.id,
                name: c.name
            } AS contract
        }

        CALL {
            WITH w
            MATCH (w)--(f:FinancialSource)
            RETURN {
                id: f.id,
                name: f.name
            } AS financialSource
        }

        CALL {
            WITH w
            MATCH (w)--(s:Stage)
            RETURN {
                id: s.id,
                name: s.name,
                color: s.color,
                sequence: s.sequence
            } AS stage
        }

        CALL {
            WITH w
            MATCH (w)--(bs:BookingStage)
            RETURN {
                id: bs.id,
                name: bs.name,
                color: bs.color,
                sequence: bs.sequence
            } AS bookingStage
        }

        CALL {
            WITH plan
            MATCH (plan)<-[:MANAGES]-(pm:ProjectManager)
            RETURN {
                id: pm.id,
                name: pm.name,
                color: pm.color
            } AS projectManager
        }

        CALL {
            WITH plan
            RETURN 
                apoc.temporal.format(plan.startDate, "YYYY-MM-dd") AS startDate,
                apoc.temporal.format(plan.endDate, "YYYY-MM-dd") AS endDate
        }

        CALL {
            WITH plan
            RETURN round((plan.defaultWork + plan.overtimeWork)/60,1) AS work
        }


        RETURN {
            id: id,
            serialNo: serialNo,
            systematicName: systematicName,
            name: name,
            contract: contract,
            financialSource: financialSource,
            stage: stage,
            bookingStage: bookingStage,
            projectManager: projectManager,
            startDate: startDate,
            endDate: endDate,
            work: work,
            team: team        
        } AS row
        ORDER BY row.stage.sequence
   `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, query);
        return queryResult.records.map((d) => d.get('row'));
    }
};
exports.ProjectManagerWorkpackagesHandler = ProjectManagerWorkpackagesHandler;
exports.ProjectManagerWorkpackagesHandler = ProjectManagerWorkpackagesHandler = __decorate([
    (0, cqrs_1.QueryHandler)(project_manager_workpackages_query_1.ProjectManagerWorkpackagesQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ProjectManagerWorkpackagesHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/project-manager-workpackages/project-manager-workpackages.query.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/project-manager-workpackages/project-manager-workpackages.query.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagerWorkpackagesQuery = void 0;
class ProjectManagerWorkpackagesQuery {
    constructor(id) {
        this.id = id;
    }
}
exports.ProjectManagerWorkpackagesQuery = ProjectManagerWorkpackagesQuery;


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/stages/index.ts":
/*!*************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/stages/index.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./stages.handler */ "./src/app/project-management/workpackages/queries/stages/stages.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./stages.query */ "./src/app/project-management/workpackages/queries/stages/stages.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/stages/stages.handler.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/stages/stages.handler.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StagesQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const stages_query_1 = __webpack_require__(/*! ./stages.query */ "./src/app/project-management/workpackages/queries/stages/stages.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let StagesQueryHandler = class StagesQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
            MATCH (s:Stage)
            RETURN s{.*, id: s.name} AS stage ORDER BY stage.sequence
    `;
    }
    async execute() {
        const queryResult = await this.client.read(this.query);
        const response = queryResult.records.map((d) => d.get('stage'));
        return response;
    }
};
exports.StagesQueryHandler = StagesQueryHandler;
exports.StagesQueryHandler = StagesQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(stages_query_1.StagesQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], StagesQueryHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/stages/stages.query.ts":
/*!********************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/stages/stages.query.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StagesQuery = void 0;
class StagesQuery {
    constructor() { }
}
exports.StagesQuery = StagesQuery;
;


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/validate-systematic-name/index.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/validate-systematic-name/index.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./validate-systematicname.handler */ "./src/app/project-management/workpackages/queries/validate-systematic-name/validate-systematicname.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./validate-systematicname.query */ "./src/app/project-management/workpackages/queries/validate-systematic-name/validate-systematicname.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/validate-systematic-name/validate-systematicname.handler.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/validate-systematic-name/validate-systematicname.handler.ts ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateSystematicNameQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const validate_systematicname_query_1 = __webpack_require__(/*! ./validate-systematicname.query */ "./src/app/project-management/workpackages/queries/validate-systematic-name/validate-systematicname.query.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ValidateSystematicNameQueryHandler = class ValidateSystematicNameQueryHandler {
    constructor(client) {
        this.client = client;
        this.validateQuery = `
            MATCH (c:Contract {id: $contractId})
            MATCH (f:FinancialSource {id: $financialSourceId})
            WITH apoc.text.join([c.abbrevation, f.name, $serialNo], "-") as systematicName
            CALL {
                WITH systematicName
                OPTIONAL MATCH (w:Workpackage {systematicName: systematicName})
                    WHERE NOT w.id = $id
                WITH collect(w) as matches
                RETURN CASE 
                    WHEN size(matches) > 0 THEN false
                    ELSE true
                END AS isUnique
            }
            RETURN systematicName as systematicName, isUnique as isUnique
        `;
    }
    async execute({ contractId, financialSourceId, serialNo, id = null, }) {
        const queryResult = await this.client.read(this.validateQuery, {
            contractId: contractId,
            financialSourceId: financialSourceId,
            serialNo: serialNo,
            id: id,
        });
        const rec = queryResult.records[0];
        console.log(rec);
        if (rec.get('isUnique') === true) {
            return rec.get('systematicName');
        }
        return new _shared_1.FormErrorResponse({
            message: 'Der findes allerede en arbejdspakke med denne kontrakt, finanskilde og serienummer. Denne kombination skal være unik.',
        });
    }
};
exports.ValidateSystematicNameQueryHandler = ValidateSystematicNameQueryHandler;
exports.ValidateSystematicNameQueryHandler = ValidateSystematicNameQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(validate_systematicname_query_1.ValidateSystematicNameQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ValidateSystematicNameQueryHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/validate-systematic-name/validate-systematicname.query.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/validate-systematic-name/validate-systematicname.query.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateSystematicNameQuery = void 0;
class ValidateSystematicNameQuery {
    constructor(contractId, financialSourceId, serialNo, id) {
        this.contractId = contractId;
        this.financialSourceId = financialSourceId;
        this.serialNo = serialNo;
        this.id = id;
    }
}
exports.ValidateSystematicNameQuery = ValidateSystematicNameQuery;


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackage-create-form/index.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackage-create-form/index.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./workpackage-create-form.handler */ "./src/app/project-management/workpackages/queries/workpackage-create-form/workpackage-create-form.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackage-create-form.query */ "./src/app/project-management/workpackages/queries/workpackage-create-form/workpackage-create-form.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackage-create-form/workpackage-create-form.handler.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackage-create-form/workpackage-create-form.handler.ts ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackageCreateFormQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const workpackage_create_form_query_1 = __webpack_require__(/*! ./workpackage-create-form.query */ "./src/app/project-management/workpackages/queries/workpackage-create-form/workpackage-create-form.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let WorkpackageCreateFormQueryHandler = class WorkpackageCreateFormQueryHandler {
    constructor(client) {
        this.client = client;
    }
    async execute() {
        const record = await this.getRecord();
        const dates = {
            startDate: luxon_1.DateTime.now().setZone('utc').toISODate(),
            endDate: luxon_1.DateTime.now().setZone('utc').plus({ months: 1 }).toISODate(),
        };
        return {
            ...record,
            ...dates,
        };
    }
    async getRecord() {
        const queryResult = await this.client.read(`
        MATCH (pm:ProjectManager)
            WHERE pm.name = "Ingen"
        RETURN {
            name: "",
            description: "",
            contract: "",
            financialSource: "",
            serialNo: "",
            projectId: "none",
            stage: "Ny",
            projectManager: pm.id
        } as record
    `);
        return queryResult.records[0].get('record');
    }
};
exports.WorkpackageCreateFormQueryHandler = WorkpackageCreateFormQueryHandler;
exports.WorkpackageCreateFormQueryHandler = WorkpackageCreateFormQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(workpackage_create_form_query_1.WorkpackageCreateFormQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], WorkpackageCreateFormQueryHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackage-create-form/workpackage-create-form.query.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackage-create-form/workpackage-create-form.query.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackageCreateFormQuery = void 0;
class WorkpackageCreateFormQuery {
    constructor() { }
}
exports.WorkpackageCreateFormQuery = WorkpackageCreateFormQuery;


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackage-form-options/index.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackage-form-options/index.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./workpackage-form-options.handler */ "./src/app/project-management/workpackages/queries/workpackage-form-options/workpackage-form-options.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackage-form-options.query */ "./src/app/project-management/workpackages/queries/workpackage-form-options/workpackage-form-options.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackage-form-options/workpackage-form-options.handler.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackage-form-options/workpackage-form-options.handler.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackageFormOptionsQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const workpackage_form_options_query_1 = __webpack_require__(/*! ./workpackage-form-options.query */ "./src/app/project-management/workpackages/queries/workpackage-form-options/workpackage-form-options.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let WorkpackageFormOptionsQueryHandler = class WorkpackageFormOptionsQueryHandler {
    constructor(client) {
        this.client = client;
    }
    async execute() {
        return await Promise.all([
            this.getFinancialSourceOptions(),
            this.getContractOptions(),
        ]).then((res) => ({
            financialSourceOptions: res[0],
            contractOptions: res[1],
        }));
    }
    async getFinancialSourceOptions() {
        const q = `
        MATCH (f:FinancialSource)
        RETURN {
            id: f.id,
            name: f.name
        } AS option
        ORDER BY option.name
    `;
        const queryResult = await this.client.read(q);
        return queryResult.records.map((d) => d.get('option'));
    }
    async getContractOptions() {
        const q = `
        MATCH (c:Contract)
        RETURN {
            id: c.id,
            name: c.name
        } AS option
        ORDER BY option.name
    `;
        const queryResult = await this.client.read(q);
        return queryResult.records.map((d) => d.get('option'));
    }
};
exports.WorkpackageFormOptionsQueryHandler = WorkpackageFormOptionsQueryHandler;
exports.WorkpackageFormOptionsQueryHandler = WorkpackageFormOptionsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(workpackage_form_options_query_1.WorkpackageFormOptionsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], WorkpackageFormOptionsQueryHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackage-form-options/workpackage-form-options.query.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackage-form-options/workpackage-form-options.query.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackageFormOptionsQuery = void 0;
class WorkpackageFormOptionsQuery {
    constructor() { }
}
exports.WorkpackageFormOptionsQuery = WorkpackageFormOptionsQuery;


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackages-view/index.ts":
/*!************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackages-view/index.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./workpackage-view.handler */ "./src/app/project-management/workpackages/queries/workpackages-view/workpackage-view.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackage-view.query */ "./src/app/project-management/workpackages/queries/workpackages-view/workpackage-view.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackages-view/workpackage-view.handler.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackages-view/workpackage-view.handler.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackageViewQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const workpackage_view_query_1 = __webpack_require__(/*! ./workpackage-view.query */ "./src/app/project-management/workpackages/queries/workpackages-view/workpackage-view.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let WorkpackageViewQueryHandler = class WorkpackageViewQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (defaultPM:DefaultProjectManager)
        MATCH (w:Workpackage)--(plan:Plan)


        CALL {
            WITH w
            RETURN
                w.id AS id,
                w.serialNo AS serialNo,
                w.systematicName AS systematicName,
                w.name AS name
        }

        CALL {
            WITH w
            MATCH (w)--(c:Contract)
            RETURN {
                id: c.id,
                name: c.name
            } AS contract
        }

        CALL {
            WITH w
            MATCH (w)--(f:FinancialSource)
            RETURN {
                id: f.id,
                name: f.name
            } AS financialSource
        }

        CALL {
            WITH w
            MATCH (w)--(s:Stage)
            RETURN {
                id: s.id,
                name: s.name,
                color: s.color,
                sequence: s.sequence
            } AS stage
        }

        CALL {
            WITH w
            MATCH (w)--(bs:BookingStage)
            RETURN {
                id: bs.id,
                name: bs.name,
                color: bs.color,
                sequence: bs.sequence
            } AS bookingStage
        }

        CALL {
            WITH plan, defaultPM
            OPTIONAL MATCH (plan)<-[:MANAGES]-(pm:ProjectManager)
            RETURN CASE
                WHEN pm.id IS NOT NULL
                    THEN  {
                        id: pm.id,
                        name: pm.name,
                        color: pm.color
                    } 
                ELSE {
                    id: defaultPM.id,
                    name: defaultPM.name,
                    color: defaultPM.color
                }
            END AS projectManager
        }

        CALL {
            WITH plan
            RETURN 
                apoc.temporal.format(plan.startDate, "YYYY-MM-dd") AS startDate,
                apoc.temporal.format(plan.endDate, "YYYY-MM-dd") AS endDate
        }

        CALL {
            WITH plan
            RETURN round((plan.defaultWork + plan.overtimeWork)/60,1) AS work
        }


        RETURN {
            id: id,
            serialNo: serialNo,
            systematicName: systematicName,
            name: name,
            contract: contract,
            financialSource: financialSource,
            stage: stage,
            bookingStage: bookingStage,
            projectManager: projectManager,
            startDate: startDate,
            endDate: endDate,
            work: work,
            team: []        
        } AS row
        ORDER BY row.systematicName
   `;
    }
    async execute() {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('row'));
    }
};
exports.WorkpackageViewQueryHandler = WorkpackageViewQueryHandler;
exports.WorkpackageViewQueryHandler = WorkpackageViewQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(workpackage_view_query_1.WorkpackageViewQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], WorkpackageViewQueryHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackages-view/workpackage-view.query.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackages-view/workpackage-view.query.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackageViewQuery = void 0;
class WorkpackageViewQuery {
    constructor() { }
}
exports.WorkpackageViewQuery = WorkpackageViewQuery;


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackge-profile/index.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackge-profile/index.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./workpackage-profile.handler */ "./src/app/project-management/workpackages/queries/workpackge-profile/workpackage-profile.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackage-profile.query */ "./src/app/project-management/workpackages/queries/workpackge-profile/workpackage-profile.query.ts"), exports);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackge-profile/workpackage-profile.handler.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackge-profile/workpackage-profile.handler.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackageProfileQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const workpackage_profile_query_1 = __webpack_require__(/*! ./workpackage-profile.query */ "./src/app/project-management/workpackages/queries/workpackge-profile/workpackage-profile.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let WorkpackageProfileQueryHandler = class WorkpackageProfileQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (w:Workpackage)
            WHERE w.id = $workpackageId

        //Foreign keys
        CALL {
            WITH w
            MATCH (w)--(p:Plan)
            MATCH (w)--(c:Contract)
            MATCH (w)--(f:FinancialSource)
            MATCH (w)--(s:Stage)
            MATCH (w)--(bs:BookingStage)

            RETURN {
                contractId: c.id,
                financialSourceId: f.id,
                stageId: s.name,
                bookingStageId: bs.name,
                planId: p.id
            } AS foreignKeys
        }

        //Managers
        CALL {
            WITH w
            //Project manager
            CALL {
                WITH w
                MATCH (w)--(:Plan)<-[:MANAGES]-(pm:ProjectManager)
                RETURN {
                    id: pm.id,
                    name: pm.name,
                    color: pm.color
                } AS projectManager
            }

            RETURN {
                projectManager: projectManager
            } AS managers
        }

        RETURN {
            node: w{.*},
            foreignKeys: foreignKeys,
            managers: managers
        } AS profile
    `;
        this.optionsQuery = `
        //Contract options
        CALL {
            MATCH (c:Contract) 
            WITH c ORDER BY c.name
            WITH collect(c{.*}) as contracts
            RETURN contracts
        }

        //FinancialSource options
        CALL {
            MATCH (f:FinancialSource) 
            WITH f ORDER BY f.name
            WITH collect(f{.*}) as financialSources
            RETURN financialSources
        }

        //Stage options
        CALl {
            MATCH (s:Stage)
            WITH s ORDER BY s.sequence
            WITH {
                id: s.name,
                name: s.name,
                color: s.color
            } AS stage
            WITH collect(stage) AS stages
            RETURN stages
        }

        //Booking stage options
        CALL {
            MATCH (bs:BookingStage)
            WITH bs ORDER BY bs.sequence
            WITH {
                id: bs.name,
                name: bs.name,
                color: bs.color
            } AS bookingStage
            WITH collect(bookingStage) AS bookingStages
            RETURN bookingStages
        }


        RETURN {
            contracts: contracts,
            financialSources: financialSources,
            stages: stages,
            bookingStages: bookingStages
        } AS options
    `;
    }
    async execute(query) {
        return await Promise.all([this.getProfile(query.workpackageId), this.getOptions()]).then((res) => ({
            ...res[0],
            options: res[1],
        }));
    }
    async getProfile(workpackageId) {
        const queryResult = await this.client.read(this.query, {
            workpackageId,
        });
        return queryResult.records[0].get('profile');
    }
    async getOptions() {
        const queryResult = await this.client.read(this.optionsQuery);
        return queryResult.records[0].get('options');
    }
};
exports.WorkpackageProfileQueryHandler = WorkpackageProfileQueryHandler;
exports.WorkpackageProfileQueryHandler = WorkpackageProfileQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(workpackage_profile_query_1.WorkpackageProfileQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], WorkpackageProfileQueryHandler);


/***/ }),

/***/ "./src/app/project-management/workpackages/queries/workpackge-profile/workpackage-profile.query.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/project-management/workpackages/queries/workpackge-profile/workpackage-profile.query.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackageProfileQuery = void 0;
class WorkpackageProfileQuery {
    constructor(workpackageId) {
        this.workpackageId = workpackageId;
    }
}
exports.WorkpackageProfileQuery = WorkpackageProfileQuery;


/***/ }),

/***/ "./src/app/project-management/workpackages/workpackages.controller.ts":
/*!****************************************************************************!*\
  !*** ./src/app/project-management/workpackages/workpackages.controller.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackagesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/project-management/workpackages/queries/index.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const util_1 = __webpack_require__(/*! @/libs/util */ "./src/libs/util/index.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/project-management/workpackages/commands/index.ts");
let WorkpackagesController = class WorkpackagesController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async getWorkpackagesView() {
        return await this.queryBus.execute(new queries_1.WorkpackageViewQuery());
    }
    async getWorkpackageProfile(workpackageId) {
        return await this.queryBus.execute(new queries_1.WorkpackageProfileQuery(workpackageId));
    }
    async createWorkpackage(dto, uid) {
        return await this.commandBus.execute(new commands_1.CreateWorkpackageCommand(dto, uid));
    }
    async updateWorkpackage(workpackageId, dto, uid) {
        return await this.commandBus.execute(new commands_1.UpdateWorkpackageCommand({ ...dto, workpackageId }, uid));
    }
    async deleteWorkpackage(workpackageId, uid) {
        return await this.commandBus.execute(new commands_1.DeleteWorkpackageCommand(workpackageId, uid));
    }
};
exports.WorkpackagesController = WorkpackagesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkpackagesController.prototype, "getWorkpackagesView", null);
__decorate([
    (0, common_1.Get)(':workpackageId'),
    __param(0, (0, common_1.Param)('workpackageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkpackagesController.prototype, "getWorkpackageProfile", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof _shared_1.CreateWorkpackageDto !== "undefined" && _shared_1.CreateWorkpackageDto) === "function" ? _c : Object, String]),
    __metadata("design:returntype", Promise)
], WorkpackagesController.prototype, "createWorkpackage", null);
__decorate([
    (0, common_1.Post)(':workpackageId'),
    __param(0, (0, common_1.Param)('workpackageId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof Omit !== "undefined" && Omit) === "function" ? _d : Object, String]),
    __metadata("design:returntype", Promise)
], WorkpackagesController.prototype, "updateWorkpackage", null);
__decorate([
    (0, common_1.Delete)(':workpackageId'),
    __param(0, (0, common_1.Param)('workpackageId')),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WorkpackagesController.prototype, "deleteWorkpackage", null);
exports.WorkpackagesController = WorkpackagesController = __decorate([
    (0, common_1.Controller)('workpackages'),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], WorkpackagesController);


/***/ }),

/***/ "./src/app/project-management/workpackages/workpackages.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/project-management/workpackages/workpackages.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkpackagesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/project-management/workpackages/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/project-management/workpackages/queries/index.ts");
const workpackages_controller_1 = __webpack_require__(/*! ./workpackages.controller */ "./src/app/project-management/workpackages/workpackages.controller.ts");
let WorkpackagesModule = class WorkpackagesModule {
};
exports.WorkpackagesModule = WorkpackagesModule;
exports.WorkpackagesModule = WorkpackagesModule = __decorate([
    (0, common_1.Module)({
        providers: [...commands_1.commandHandlers, ...queries_1.queryHandlers],
        controllers: [workpackages_controller_1.WorkpackagesController],
    })
], WorkpackagesModule);


/***/ }),

/***/ "./src/app/resource-management/agents/agents.controller.ts":
/*!*****************************************************************!*\
  !*** ./src/app/resource-management/agents/agents.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgentsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/resource-management/agents/queries/index.ts");
const util_1 = __webpack_require__(/*! @/libs/util */ "./src/libs/util/index.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/resource-management/agents/commands/index.ts");
let AgentsController = class AgentsController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async getDeleteConsequences(agentId) {
        return await this.queryBus.execute(new queries_1.DeleteAgentConsequencesQuery(agentId));
    }
    async deleteAgent(agentId, uid) {
        return await this.commandBus.execute(new commands_1.DeleteAgentCommand(agentId, uid));
    }
    async createAgents(dto, uid) {
        let results = [];
        for (let i = 0; i < dto.length; i++) {
            const response = await this.commandBus.execute(new commands_1.CreateAgentCommand(dto[i], uid));
            if (response) {
                results.push(response);
            }
        }
        return results[0];
    }
    async getResourceAgents(resourceId) {
        return await this.queryBus.execute(new queries_1.ResourceAgentsQuery(resourceId));
    }
    async getResourceTypeAgents(resourceTypeId) {
        return await this.queryBus.execute(new queries_1.ResourceTypeAgentsQuery(resourceTypeId));
    }
};
exports.AgentsController = AgentsController;
__decorate([
    (0, common_1.Get)('delete-consequences/:agentId'),
    __param(0, (0, common_1.Param)('agentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "getDeleteConsequences", null);
__decorate([
    (0, common_1.Delete)(':agentId'),
    __param(0, (0, common_1.Param)('agentId')),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "deleteAgent", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "createAgents", null);
__decorate([
    (0, common_1.Get)('resource/:resourceId'),
    __param(0, (0, common_1.Param)('resourceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "getResourceAgents", null);
__decorate([
    (0, common_1.Get)('resourcetype/:resourceTypeId'),
    __param(0, (0, common_1.Param)('resourceTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "getResourceTypeAgents", null);
exports.AgentsController = AgentsController = __decorate([
    (0, common_1.Controller)('agents'),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], AgentsController);


/***/ }),

/***/ "./src/app/resource-management/agents/agents.event-listener.ts":
/*!*********************************************************************!*\
  !*** ./src/app/resource-management/agents/agents.event-listener.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgentsEventListener = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/resource-management/agents/commands/index.ts");
const delete_orphan_agents_1 = __webpack_require__(/*! ./commands/delete-orphan-agents */ "./src/app/resource-management/agents/commands/delete-orphan-agents/index.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const events_1 = __webpack_require__(/*! @/libs/events */ "./src/libs/events/index.ts");
let AgentsEventListener = class AgentsEventListener {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    async handleResourceCreated(event) {
        console.log('Resource created event triggered in agent-event-listener. Creating agents' +
            ' for resource and resource types');
        if (!event.resourceId) {
            console.warn('Resource created event does not contain a resourceId. Cannot create agents.');
            return;
        }
        for (let i = 0; i < event.resourceTypes.length; i++) {
            await this.createAgent(event.resourceId, event.resourceTypes[i], event.uid);
        }
    }
    async handleResourceTypeCreated(event) {
        console.log('Resource type created event triggered in agent-event-listener. Creating agents for resource type.');
        if (!event.resourceTypeId) {
            console.warn('Resource type created event does not contain a resourceTypeId. Cannot create agents.');
            return;
        }
        for (let i = 0; i < event.resources.length; i++) {
            await this.createAgent(event.resources[i], event.resourceTypeId, event.uid);
        }
    }
    async createAgent(resourceId, resourceTypeId, uid) {
        await this.commandBus.execute(new commands_1.CreateAgentCommand({ resourceTypeId: resourceTypeId, resourceId: resourceId }, uid));
    }
    async handleResourceDeleted() {
        console.log('Resource deleted event triggered in agent-event-listener. Deleting orphan agents.');
        await this.commandBus.execute(new delete_orphan_agents_1.DeleteOrphanAgentsCommand());
    }
    async handleResourceTypeDeleted() {
        console.log('Resource type deleted event triggered in agent-event-listener. Deleting orphan agents.');
        await this.commandBus.execute(new delete_orphan_agents_1.DeleteOrphanAgentsCommand());
    }
};
exports.AgentsEventListener = AgentsEventListener;
__decorate([
    (0, event_emitter_1.OnEvent)('resource.created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof events_1.ResourceCreatedEvent !== "undefined" && events_1.ResourceCreatedEvent) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AgentsEventListener.prototype, "handleResourceCreated", null);
__decorate([
    (0, event_emitter_1.OnEvent)('resourcetype.created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof events_1.ResourceTypeCreatedEvent !== "undefined" && events_1.ResourceTypeCreatedEvent) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AgentsEventListener.prototype, "handleResourceTypeCreated", null);
__decorate([
    (0, event_emitter_1.OnEvent)('resource.deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgentsEventListener.prototype, "handleResourceDeleted", null);
__decorate([
    (0, event_emitter_1.OnEvent)('resourcetype.deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgentsEventListener.prototype, "handleResourceTypeDeleted", null);
exports.AgentsEventListener = AgentsEventListener = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object])
], AgentsEventListener);


/***/ }),

/***/ "./src/app/resource-management/agents/agents.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/resource-management/agents/agents.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AgentsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/resource-management/agents/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/resource-management/agents/queries/index.ts");
const agents_event_listener_1 = __webpack_require__(/*! ./agents.event-listener */ "./src/app/resource-management/agents/agents.event-listener.ts");
const agents_controller_1 = __webpack_require__(/*! ./agents.controller */ "./src/app/resource-management/agents/agents.controller.ts");
let AgentsModule = class AgentsModule {
};
exports.AgentsModule = AgentsModule;
exports.AgentsModule = AgentsModule = __decorate([
    (0, common_1.Module)({
        providers: [...commands_1.commandHandlers, ...queries_1.queryHandlers, agents_event_listener_1.AgentsEventListener],
        controllers: [agents_controller_1.AgentsController],
    })
], AgentsModule);


/***/ }),

/***/ "./src/app/resource-management/agents/commands/create-agent/create-agent.command.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/create-agent/create-agent.command.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAgentCommand = void 0;
class CreateAgentCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateAgentCommand = CreateAgentCommand;


/***/ }),

/***/ "./src/app/resource-management/agents/commands/create-agent/create-agent.handler.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/create-agent/create-agent.handler.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAgentHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_agent_command_1 = __webpack_require__(/*! ./create-agent.command */ "./src/app/resource-management/agents/commands/create-agent/create-agent.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let CreateAgentHandler = class CreateAgentHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.existsQuery = `
        OPTIONAL MATCH (a:Agent)
            WHERE (a)-[:IS]->(:Resource {id: $resourceId})
            AND (a)-[:IS]->(:ResourceType {id: $resourceTypeId})
        RETURN CASE
            WHEN a IS NULL THEN false
            ELSE true
        END AS agentExists
    
    `;
        this.query = `
        MATCH (u:User {uid: $uid})
        MATCH (r:Resource)
            WHERE r.id = $resourceId
        MATCH (rt:ResourceType)
            WHERE rt.id = $resourceTypeId

        CREATE (a:Agent {id: apoc.create.uuid()})
        MERGE (a)-[:IS]->(r)
        MERGE (a)-[:IS]->(rt)
        MERGE (a)-[:CREATED_BY {timestamp: timestamp()}]->(u)
        RETURN a.id AS agentId
   `;
    }
    async execute(command) {
        const exists = await this.checkIfExists(command.dto);
        if (exists) {
            return new _shared_1.FormErrorResponse({
                message: 'Der findes allerede en agent på denne ressource',
            });
        }
        const queryResult = await this.client.write(this.query, {
            resourceId: command.dto.resourceId,
            resourceTypeId: command.dto.resourceTypeId,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('agentId');
        console.log(result);
        if (!result) {
            return new _shared_1.FormErrorResponse({ message: 'Der skete en fejl' });
        }
        this.publisher.publish({
            agentId: result,
            ...command.dto,
            uid: command.uid,
            type: 'agent.created',
        });
        return new _shared_1.FormSuccessResponse({
            id: result,
            message: 'Agent oprettet',
        });
    }
    async checkIfExists(dto) {
        const queryResult = await this.client.read(this.existsQuery, dto);
        return queryResult.records[0].get('agentExists');
    }
};
exports.CreateAgentHandler = CreateAgentHandler;
exports.CreateAgentHandler = CreateAgentHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_agent_command_1.CreateAgentCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], CreateAgentHandler);


/***/ }),

/***/ "./src/app/resource-management/agents/commands/create-agent/index.ts":
/*!***************************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/create-agent/index.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-agent.command */ "./src/app/resource-management/agents/commands/create-agent/create-agent.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-agent.handler */ "./src/app/resource-management/agents/commands/create-agent/create-agent.handler.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/agents/commands/delete-agent/delete-agent.command.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/delete-agent/delete-agent.command.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAgentCommand = void 0;
class DeleteAgentCommand {
    constructor(agentId, uid) {
        this.agentId = agentId;
        this.uid = uid;
    }
}
exports.DeleteAgentCommand = DeleteAgentCommand;


/***/ }),

/***/ "./src/app/resource-management/agents/commands/delete-agent/delete-agent.handler.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/delete-agent/delete-agent.handler.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAgentHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const delete_agent_command_1 = __webpack_require__(/*! ./delete-agent.command */ "./src/app/resource-management/agents/commands/delete-agent/delete-agent.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let DeleteAgentHandler = class DeleteAgentHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (agent:Agent)
            WHERE agent.id = $agentId
    
        OPTIONAL MATCH (agent)-[:IS]->(resource:Resource)
        OPTIONAL MATCH (agent)-[:IS]->(resourcetype:ResourceType)
    
        // Store IDs before deletion
        WITH agent, resource.id AS resourceId, resourcetype.id AS resourcetypeId
    
        // Delete related Allocations
        CALL {
            WITH agent
            MATCH (agent)-[:IS_ASSIGNED_TO]->(a:Allocation)
            DETACH DELETE a
        }
    
        // Delete the Agent node
        DETACH DELETE agent
    
        // Return the captured IDs
        RETURN {
            resourceId: resourceId, 
            resourceTypeId: resourcetypeId
        } AS deletedInfo
    `;
    }
    async execute(command) {
        const result = await this.client.write(this.query, { agentId: command.agentId });
        const deletedInfo = result.records[0].get('deletedInfo');
        this.publisher.publish({
            agentId: command.agentId,
            resourceId: deletedInfo.resourceId,
            resourceTypeId: deletedInfo.resourceTypeId,
            type: 'agent.deleted',
        });
        return new _shared_1.FormSuccessResponse({ message: 'Agent slettet' });
    }
};
exports.DeleteAgentHandler = DeleteAgentHandler;
exports.DeleteAgentHandler = DeleteAgentHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_agent_command_1.DeleteAgentCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], DeleteAgentHandler);


/***/ }),

/***/ "./src/app/resource-management/agents/commands/delete-agent/index.ts":
/*!***************************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/delete-agent/index.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./delete-agent.command */ "./src/app/resource-management/agents/commands/delete-agent/delete-agent.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-agent.handler */ "./src/app/resource-management/agents/commands/delete-agent/delete-agent.handler.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/agents/commands/delete-orphan-agents/delete-orphan-agents.command.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/delete-orphan-agents/delete-orphan-agents.command.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteOrphanAgentsCommand = void 0;
class DeleteOrphanAgentsCommand {
}
exports.DeleteOrphanAgentsCommand = DeleteOrphanAgentsCommand;


/***/ }),

/***/ "./src/app/resource-management/agents/commands/delete-orphan-agents/delete-orphan-agents.handler.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/delete-orphan-agents/delete-orphan-agents.handler.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteOrphanAgentsHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const delete_orphan_agents_command_1 = __webpack_require__(/*! ./delete-orphan-agents.command */ "./src/app/resource-management/agents/commands/delete-orphan-agents/delete-orphan-agents.command.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let DeleteOrphanAgentsHandler = class DeleteOrphanAgentsHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (a:Agent)
            WHERE NOT (a)-[:IS]->(:Resource) OR NOT (a)-[:IS]->(:ResourceType)

        DETACH DELETE a
    `;
    }
    async execute() {
        await this.client.write(this.query);
    }
};
exports.DeleteOrphanAgentsHandler = DeleteOrphanAgentsHandler;
exports.DeleteOrphanAgentsHandler = DeleteOrphanAgentsHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_orphan_agents_command_1.DeleteOrphanAgentsCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], DeleteOrphanAgentsHandler);


/***/ }),

/***/ "./src/app/resource-management/agents/commands/delete-orphan-agents/index.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/delete-orphan-agents/index.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./delete-orphan-agents.command */ "./src/app/resource-management/agents/commands/delete-orphan-agents/delete-orphan-agents.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-orphan-agents.handler */ "./src/app/resource-management/agents/commands/delete-orphan-agents/delete-orphan-agents.handler.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/agents/commands/handlers.ts":
/*!*****************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/handlers.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commandHandlers = void 0;
const create_agent_1 = __webpack_require__(/*! ./create-agent */ "./src/app/resource-management/agents/commands/create-agent/index.ts");
const delete_agent_1 = __webpack_require__(/*! ./delete-agent */ "./src/app/resource-management/agents/commands/delete-agent/index.ts");
const delete_orphan_agents_1 = __webpack_require__(/*! ./delete-orphan-agents */ "./src/app/resource-management/agents/commands/delete-orphan-agents/index.ts");
exports.commandHandlers = [create_agent_1.CreateAgentHandler, delete_agent_1.DeleteAgentHandler, delete_orphan_agents_1.DeleteOrphanAgentsHandler];


/***/ }),

/***/ "./src/app/resource-management/agents/commands/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/resource-management/agents/commands/index.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/resource-management/agents/commands/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-agent */ "./src/app/resource-management/agents/commands/create-agent/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-agent */ "./src/app/resource-management/agents/commands/delete-agent/index.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/agents/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/resource-management/agents/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./agents.module */ "./src/app/resource-management/agents/agents.module.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/agents/queries/delete-agent-consequences/delete-agent-consequences.handler.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/delete-agent-consequences/delete-agent-consequences.handler.ts ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAgentConsequencesQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const delete_agent_consequences_query_1 = __webpack_require__(/*! ./delete-agent-consequences.query */ "./src/app/resource-management/agents/queries/delete-agent-consequences/delete-agent-consequences.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let DeleteAgentConsequencesQueryHandler = class DeleteAgentConsequencesQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (r:Resource)<-[:IS]-(agent:Agent)-[:IS]->(rt:ResourceType)
            WHERE agent.id = $agentId
        
        MATCH (agent)-[:IS_ASSIGNED_TO]->(p:Plan)<-[:HAS]-(w:Workpackage)--(bs:BookingStage)

        WITH p, 
            agent, 
            bs.name AS bookingStage, 
            w.name AS wName,
            w.systematicName AS wSystematicName, 
            w.id AS wId
        
        CALL {
            WITH p, agent
            MATCH (p)-[:HAS*3]-(a:Allocation)<-[:IS_ASSIGNED_TO]-(agent)
            MATCH (a)<-[:HAS]-(t:Task)
            WITH a, 
                t.name AS taskName, 
                round(a.defaultMinutes/60 + a.overtimeMinutes/60) AS work,
                apoc.temporal.format(a.startDate, "dd-MM-YYYY") AS startDate,
                apoc.temporal.format(a.endDate, "dd-MM-YYYY") AS endDate
            WITH collect({
                taskName: taskName,
                startDate: startDate,
                endDate: endDate,
                hours: apoc.text.join([toString(work), "timer"], " ")
            }) AS allocations, 
            apoc.text.join([toString(sum(work)), "timer"]," ") AS totalWork
            RETURN allocations, totalWork
        }

        RETURN {
            id: wId,
            name: wName,
            systematicName: wSystematicName,
            allocations: allocations,
            totalWork: totalWork
        } AS affectedWorkpackage
   `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, query);
        const response = queryResult.records.map((rec) => rec.get('affectedWorkpackage'));
        return response;
    }
};
exports.DeleteAgentConsequencesQueryHandler = DeleteAgentConsequencesQueryHandler;
exports.DeleteAgentConsequencesQueryHandler = DeleteAgentConsequencesQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(delete_agent_consequences_query_1.DeleteAgentConsequencesQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], DeleteAgentConsequencesQueryHandler);


/***/ }),

/***/ "./src/app/resource-management/agents/queries/delete-agent-consequences/delete-agent-consequences.query.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/delete-agent-consequences/delete-agent-consequences.query.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAgentConsequencesQuery = void 0;
class DeleteAgentConsequencesQuery {
    constructor(agentId) {
        this.agentId = agentId;
    }
}
exports.DeleteAgentConsequencesQuery = DeleteAgentConsequencesQuery;


/***/ }),

/***/ "./src/app/resource-management/agents/queries/delete-agent-consequences/index.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/delete-agent-consequences/index.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./delete-agent-consequences.handler */ "./src/app/resource-management/agents/queries/delete-agent-consequences/delete-agent-consequences.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-agent-consequences.query */ "./src/app/resource-management/agents/queries/delete-agent-consequences/delete-agent-consequences.query.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/agents/queries/handlers.ts":
/*!****************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/handlers.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const resource_agents_1 = __webpack_require__(/*! ./resource-agents */ "./src/app/resource-management/agents/queries/resource-agents/index.ts");
const resourcetype_agents_1 = __webpack_require__(/*! ./resourcetype-agents */ "./src/app/resource-management/agents/queries/resourcetype-agents/index.ts");
const delete_agent_consequences_1 = __webpack_require__(/*! ./delete-agent-consequences */ "./src/app/resource-management/agents/queries/delete-agent-consequences/index.ts");
exports.queryHandlers = [
    resource_agents_1.ResourceAgentsQueryHandler,
    resourcetype_agents_1.ResourceTypeAgentsQueryHandler,
    delete_agent_consequences_1.DeleteAgentConsequencesQueryHandler,
];


/***/ }),

/***/ "./src/app/resource-management/agents/queries/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/resource-management/agents/queries/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-agent-consequences */ "./src/app/resource-management/agents/queries/delete-agent-consequences/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./resource-agents */ "./src/app/resource-management/agents/queries/resource-agents/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetype-agents */ "./src/app/resource-management/agents/queries/resourcetype-agents/index.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/agents/queries/resource-agents/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/resource-agents/index.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resource-agents.handler */ "./src/app/resource-management/agents/queries/resource-agents/resource-agents.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./resource-agents.query */ "./src/app/resource-management/agents/queries/resource-agents/resource-agents.query.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/agents/queries/resource-agents/resource-agents.handler.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/resource-agents/resource-agents.handler.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceAgentsQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const resource_agents_query_1 = __webpack_require__(/*! ./resource-agents.query */ "./src/app/resource-management/agents/queries/resource-agents/resource-agents.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ResourceAgentsQueryHandler = class ResourceAgentsQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (r:Resource)<-[:IS]-(a:Agent)-[:IS]->(rt:ResourceType)--(c:Contract)
            WHERE r.id = $resourceId
        WITH {
            resourceType: rt{
                .*,
                contract: c{.*}
            },
            agentId: a.id
        } AS data
            ORDER BY data.contract.name, data.resourceType.typeNo
        RETURN data
    `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, query);
        return queryResult.records.map((d) => d.get('data'));
    }
};
exports.ResourceAgentsQueryHandler = ResourceAgentsQueryHandler;
exports.ResourceAgentsQueryHandler = ResourceAgentsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(resource_agents_query_1.ResourceAgentsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ResourceAgentsQueryHandler);


/***/ }),

/***/ "./src/app/resource-management/agents/queries/resource-agents/resource-agents.query.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/resource-agents/resource-agents.query.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceAgentsQuery = void 0;
class ResourceAgentsQuery {
    constructor(resourceId) {
        this.resourceId = resourceId;
    }
}
exports.ResourceAgentsQuery = ResourceAgentsQuery;


/***/ }),

/***/ "./src/app/resource-management/agents/queries/resourcetype-agents/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/resourcetype-agents/index.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resourcetype-agents.handler */ "./src/app/resource-management/agents/queries/resourcetype-agents/resourcetype-agents.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetype-agents.query */ "./src/app/resource-management/agents/queries/resourcetype-agents/resourcetype-agents.query.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/agents/queries/resourcetype-agents/resourcetype-agents.handler.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/resourcetype-agents/resourcetype-agents.handler.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypeAgentsQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const resourcetype_agents_query_1 = __webpack_require__(/*! ./resourcetype-agents.query */ "./src/app/resource-management/agents/queries/resourcetype-agents/resourcetype-agents.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ResourceTypeAgentsQueryHandler = class ResourceTypeAgentsQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        OPTIONAL MATCH (rt:ResourceType)--(a:Agent)--(r:Resource)
            WHERE rt.id = $resourceTypeId
        WITH {
            agentId: a.id,
            resource: r{.*}
        } AS data
            ORDER BY data.resource.name
        RETURN data
    `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, {
            resourceTypeId: query.resourceTypeId,
        });
        return queryResult.records.map((d) => d.get('data'));
    }
};
exports.ResourceTypeAgentsQueryHandler = ResourceTypeAgentsQueryHandler;
exports.ResourceTypeAgentsQueryHandler = ResourceTypeAgentsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(resourcetype_agents_query_1.ResourceTypeAgentsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ResourceTypeAgentsQueryHandler);


/***/ }),

/***/ "./src/app/resource-management/agents/queries/resourcetype-agents/resourcetype-agents.query.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/resource-management/agents/queries/resourcetype-agents/resourcetype-agents.query.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypeAgentsQuery = void 0;
class ResourceTypeAgentsQuery {
    constructor(resourceTypeId) {
        this.resourceTypeId = resourceTypeId;
    }
}
exports.ResourceTypeAgentsQuery = ResourceTypeAgentsQuery;


/***/ }),

/***/ "./src/app/resource-management/index.ts":
/*!**********************************************!*\
  !*** ./src/app/resource-management/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resource-management.module */ "./src/app/resource-management/resource-management.module.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resource-management.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/resource-management/resource-management.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceManagementModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const resources_1 = __webpack_require__(/*! ./resources */ "./src/app/resource-management/resources/index.ts");
const resourcetypes_1 = __webpack_require__(/*! ./resourcetypes */ "./src/app/resource-management/resourcetypes/index.ts");
const agents_1 = __webpack_require__(/*! ./agents */ "./src/app/resource-management/agents/index.ts");
let ResourceManagementModule = class ResourceManagementModule {
};
exports.ResourceManagementModule = ResourceManagementModule;
exports.ResourceManagementModule = ResourceManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [resources_1.ResourcesModule, resourcetypes_1.ResourceTypesModule, agents_1.AgentsModule],
    })
], ResourceManagementModule);


/***/ }),

/***/ "./src/app/resource-management/resources/commands/create-resource/create-resource.command.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/create-resource/create-resource.command.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateResourceCommand = void 0;
class CreateResourceCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateResourceCommand = CreateResourceCommand;


/***/ }),

/***/ "./src/app/resource-management/resources/commands/create-resource/create-resource.handler.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/create-resource/create-resource.handler.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateResourceHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_resource_command_1 = __webpack_require__(/*! ./create-resource.command */ "./src/app/resource-management/resources/commands/create-resource/create-resource.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let CreateResourceHandler = class CreateResourceHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MERGE (r {
            id: apoc.create.uuid()
        })
        SET r += $properties
        SET r:Resource
        WITH r

        CALL {
            WITH r
            MATCH (c:Calendar)
                WHERE c.id = $calendar
            MERGE (r)-[:USES]->(c)
        }
        
        RETURN r.id AS id
   `;
    }
    async execute({ dto, uid }) {
        const queryResult = await this.client.write(this.query, {
            properties: {
                name: dto.name,
                initials: dto.initials,
                costDefault: dto.costDefault,
                costOvertime: dto.costOvertime,
                color: dto.color,
            },
            calendar: dto.calendar,
            uid: uid,
        });
        const id = queryResult.records[0].get('id');
        const event = {
            ...dto,
            resourceId: id,
            uid: uid,
            type: 'resource.created',
        };
        this.publisher.publish(event);
        return new _shared_1.FormSuccessResponse({ id: id });
    }
};
exports.CreateResourceHandler = CreateResourceHandler;
exports.CreateResourceHandler = CreateResourceHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_resource_command_1.CreateResourceCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], CreateResourceHandler);


/***/ }),

/***/ "./src/app/resource-management/resources/commands/create-resource/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/create-resource/index.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-resource.command */ "./src/app/resource-management/resources/commands/create-resource/create-resource.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-resource.handler */ "./src/app/resource-management/resources/commands/create-resource/create-resource.handler.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resources/commands/delete-resource/delete-resource.command.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/delete-resource/delete-resource.command.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteResourceCommand = void 0;
class DeleteResourceCommand {
    constructor(resourceId, uid) {
        this.resourceId = resourceId;
        this.uid = uid;
    }
}
exports.DeleteResourceCommand = DeleteResourceCommand;


/***/ }),

/***/ "./src/app/resource-management/resources/commands/delete-resource/delete-resource.handler.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/delete-resource/delete-resource.handler.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteResourceHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const delete_resource_command_1 = __webpack_require__(/*! ./delete-resource.command */ "./src/app/resource-management/resources/commands/delete-resource/delete-resource.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let DeleteResourceHandler = class DeleteResourceHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.deleteQuery = `
        MATCH (r:Resource)
            WHERE r.id = $resourceId
        DETACH DELETE r
    `;
    }
    async execute({ resourceId, uid }) {
        await this.client.write(this.deleteQuery, { resourceId });
        this.publisher.publish({
            type: 'resource.deleted',
            id: resourceId,
            uid: uid,
        });
        return new _shared_1.FormSuccessResponse({
            message: 'Ressourcen blev slettet',
        });
    }
};
exports.DeleteResourceHandler = DeleteResourceHandler;
exports.DeleteResourceHandler = DeleteResourceHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_resource_command_1.DeleteResourceCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], DeleteResourceHandler);


/***/ }),

/***/ "./src/app/resource-management/resources/commands/delete-resource/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/delete-resource/index.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./delete-resource.handler */ "./src/app/resource-management/resources/commands/delete-resource/delete-resource.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-resource.command */ "./src/app/resource-management/resources/commands/delete-resource/delete-resource.command.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resources/commands/handlers.ts":
/*!********************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/handlers.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commandHandlers = void 0;
const create_resource_1 = __webpack_require__(/*! ./create-resource */ "./src/app/resource-management/resources/commands/create-resource/index.ts");
const update_resource_1 = __webpack_require__(/*! ./update-resource */ "./src/app/resource-management/resources/commands/update-resource/index.ts");
const delete_resource_1 = __webpack_require__(/*! ./delete-resource */ "./src/app/resource-management/resources/commands/delete-resource/index.ts");
exports.commandHandlers = [
    create_resource_1.CreateResourceHandler,
    update_resource_1.UpdateResourceHandler,
    delete_resource_1.DeleteResourceHandler,
];


/***/ }),

/***/ "./src/app/resource-management/resources/commands/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/index.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-resource */ "./src/app/resource-management/resources/commands/create-resource/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/resource-management/resources/commands/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-resource */ "./src/app/resource-management/resources/commands/update-resource/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-resource */ "./src/app/resource-management/resources/commands/delete-resource/index.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resources/commands/update-resource/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/update-resource/index.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-resource.handler */ "./src/app/resource-management/resources/commands/update-resource/update-resource.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-resource.command */ "./src/app/resource-management/resources/commands/update-resource/update-resource.command.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resources/commands/update-resource/update-resource.command.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/update-resource/update-resource.command.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateResourceCommand = void 0;
class UpdateResourceCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateResourceCommand = UpdateResourceCommand;


/***/ }),

/***/ "./src/app/resource-management/resources/commands/update-resource/update-resource.handler.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/commands/update-resource/update-resource.handler.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateResourceHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_resource_command_1 = __webpack_require__(/*! ./update-resource.command */ "./src/app/resource-management/resources/commands/update-resource/update-resource.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdateResourceHandler = class UpdateResourceHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (r:Resource)
            WHERE r.id = $resourceId
        SET r += {
            name: $name,
            initials: $initials,
            costDefault: $costDefault,
            costOvertime: $costOvertime
        }
        RETURN {} AS result
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            resourceId: command.dto.resourceId,
            name: command.dto.name,
            initials: command.dto.initials,
            costDefault: command.dto.costDefault,
            costOvertime: command.dto.costOvertime,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        this.publisher.publish({
            ...command.dto,
            uid: command.uid,
            type: 'resource.updated',
        });
        return new _shared_1.FormSuccessResponse({
            message: 'Detaljerne blev opdateret.',
        });
    }
};
exports.UpdateResourceHandler = UpdateResourceHandler;
exports.UpdateResourceHandler = UpdateResourceHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_resource_command_1.UpdateResourceCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], UpdateResourceHandler);


/***/ }),

/***/ "./src/app/resource-management/resources/index.ts":
/*!********************************************************!*\
  !*** ./src/app/resource-management/resources/index.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resources.module */ "./src/app/resource-management/resources/resources.module.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resources/queries/handlers.ts":
/*!*******************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/handlers.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const resource_profile_1 = __webpack_require__(/*! ./resource-profile */ "./src/app/resource-management/resources/queries/resource-profile/index.ts");
const resources_view_1 = __webpack_require__(/*! ./resources-view */ "./src/app/resource-management/resources/queries/resources-view/index.ts");
const resource_options_1 = __webpack_require__(/*! ./resource-options */ "./src/app/resource-management/resources/queries/resource-options/index.ts");
exports.queryHandlers = [resources_view_1.ResourcesViewQueryHandler, resource_profile_1.ResourceProfileQueryHandler, resource_options_1.ResourceOptionsQueryHandler];


/***/ }),

/***/ "./src/app/resource-management/resources/queries/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/resource-management/resources/queries/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./resource-options */ "./src/app/resource-management/resources/queries/resource-options/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./resource-profile */ "./src/app/resource-management/resources/queries/resource-profile/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./resources-view */ "./src/app/resource-management/resources/queries/resources-view/index.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resources/queries/resource-options/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/resource-options/index.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resource-options.handler */ "./src/app/resource-management/resources/queries/resource-options/resource-options.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./resource-options.query */ "./src/app/resource-management/resources/queries/resource-options/resource-options.query.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resources/queries/resource-options/resource-options.handler.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/resource-options/resource-options.handler.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceOptionsQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const resource_options_query_1 = __webpack_require__(/*! ./resource-options.query */ "./src/app/resource-management/resources/queries/resource-options/resource-options.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ResourceOptionsQueryHandler = class ResourceOptionsQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
            MATCH (r:Resource)
            WITH {
                value: r.id,
                label: r.name,
                color: r.color
            } AS resource ORDER BY resource.name
            RETURN resource
        `;
    }
    async execute() {
        const { records } = await this.client.read(this.query);
        return records.map((d) => d.get('resource'));
    }
};
exports.ResourceOptionsQueryHandler = ResourceOptionsQueryHandler;
exports.ResourceOptionsQueryHandler = ResourceOptionsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(resource_options_query_1.ResourceOptionsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ResourceOptionsQueryHandler);


/***/ }),

/***/ "./src/app/resource-management/resources/queries/resource-options/resource-options.query.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/resource-options/resource-options.query.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceOptionsQuery = void 0;
class ResourceOptionsQuery {
    constructor() { }
}
exports.ResourceOptionsQuery = ResourceOptionsQuery;


/***/ }),

/***/ "./src/app/resource-management/resources/queries/resource-profile/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/resource-profile/index.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resource-profile.handler */ "./src/app/resource-management/resources/queries/resource-profile/resource-profile.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./resource-profile.query */ "./src/app/resource-management/resources/queries/resource-profile/resource-profile.query.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resources/queries/resource-profile/resource-profile.handler.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/resource-profile/resource-profile.handler.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceProfileQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const resource_profile_query_1 = __webpack_require__(/*! ./resource-profile.query */ "./src/app/resource-management/resources/queries/resource-profile/resource-profile.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ResourceProfileQueryHandler = class ResourceProfileQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (r:Resource {id: $resourceId})

        CALL {
            WITH r
            RETURN CASE
                WHEN "ProjectManager" IN labels(r)
                    THEN true
                ELSE false
            END AS isProjectManager
        }

        CALL {
            WITH r
            RETURN CASE
                WHEN "User" IN labels(r)
                    THEN true
                ELSE false
            END AS isUser
        }

        RETURN r{.*, isUser: isUser, isProjectManager: isProjectManager} AS profile
    `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, {
            resourceId: query.resourceId,
        });
        return queryResult.records[0].get('profile');
    }
};
exports.ResourceProfileQueryHandler = ResourceProfileQueryHandler;
exports.ResourceProfileQueryHandler = ResourceProfileQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(resource_profile_query_1.ResourceProfileQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ResourceProfileQueryHandler);


/***/ }),

/***/ "./src/app/resource-management/resources/queries/resource-profile/resource-profile.query.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/resource-profile/resource-profile.query.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceProfileQuery = void 0;
class ResourceProfileQuery {
    constructor(resourceId) {
        this.resourceId = resourceId;
    }
}
exports.ResourceProfileQuery = ResourceProfileQuery;


/***/ }),

/***/ "./src/app/resource-management/resources/queries/resources-view/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/resources-view/index.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resources-view.handler */ "./src/app/resource-management/resources/queries/resources-view/resources-view.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./resources-view.query */ "./src/app/resource-management/resources/queries/resources-view/resources-view.query.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resources/queries/resources-view/resources-view.handler.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/resources-view/resources-view.handler.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourcesViewQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const resources_view_query_1 = __webpack_require__(/*! ./resources-view.query */ "./src/app/resource-management/resources/queries/resources-view/resources-view.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ResourcesViewQueryHandler = class ResourcesViewQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (rs:Resource)
        UNWIND rs AS r
        CALL {
            WITH r
            OPTIONAL MATCH (r)<-[:IS]-(:Agent)-[:IS]->(rts:ResourceType)
            RETURN collect(DISTINCT rts) AS rtList
        }
        WITH [rt IN rtList WHERE rt IS NOT NULL | {
            id: rt.id,
            name: rt.name,
            typeNo: apoc.text.join(["type", toString(toInteger(rt.typeNo))], " ")
        }] AS resourceTypes, r
        CALL {
            WITH r
            WITH exists((:User)-[:IS]->(r)) AS isUser
            RETURN isUser
        }
    
        RETURN {
            id: r.id,
            node: r{.*},
            resourceTypes: resourceTypes,
            isUser: isUser
        } AS row
        ORDER BY row.node.name
    `;
    }
    async execute() {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('row'));
    }
};
exports.ResourcesViewQueryHandler = ResourcesViewQueryHandler;
exports.ResourcesViewQueryHandler = ResourcesViewQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(resources_view_query_1.ResourcesViewQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ResourcesViewQueryHandler);


/***/ }),

/***/ "./src/app/resource-management/resources/queries/resources-view/resources-view.query.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/resource-management/resources/queries/resources-view/resources-view.query.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourcesViewQuery = void 0;
class ResourcesViewQuery {
    constructor() { }
}
exports.ResourcesViewQuery = ResourcesViewQuery;


/***/ }),

/***/ "./src/app/resource-management/resources/resources.controller.ts":
/*!***********************************************************************!*\
  !*** ./src/app/resource-management/resources/resources.controller.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourcesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const util_1 = __webpack_require__(/*! @/libs/util */ "./src/libs/util/index.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/resource-management/resources/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/resource-management/resources/queries/index.ts");
let ResourcesController = class ResourcesController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async createResource(dto, uid) {
        return await this.commandBus.execute(new commands_1.CreateResourceCommand(dto, uid));
    }
    async getResourceOptions() {
        return await this.queryBus.execute(new queries_1.ResourceOptionsQuery());
    }
    async updateResource(resourceId, dto, uid) {
        return await this.commandBus.execute(new commands_1.UpdateResourceCommand({ ...dto, resourceId }, uid));
    }
    async deleteResource(resourceId, uid) {
        return await this.commandBus.execute(new commands_1.DeleteResourceCommand(resourceId, uid));
    }
    async getResourcesView() {
        return await this.queryBus.execute(new queries_1.ResourcesViewQuery());
    }
    async getResourceProfile(resourceId) {
        return this.queryBus.execute(new queries_1.ResourceProfileQuery(resourceId));
    }
};
exports.ResourcesController = ResourcesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof _shared_1.CreateResourceDto !== "undefined" && _shared_1.CreateResourceDto) === "function" ? _c : Object, String]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "createResource", null);
__decorate([
    (0, common_1.Get)('options'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ResourcesController.prototype, "getResourceOptions", null);
__decorate([
    (0, common_1.Post)(':resourceId'),
    __param(0, (0, common_1.Param)('resourceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof _shared_1.CreateResourceDto !== "undefined" && _shared_1.CreateResourceDto) === "function" ? _e : Object, String]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "updateResource", null);
__decorate([
    (0, common_1.Delete)(':resourceId'),
    __param(0, (0, common_1.Param)('resourceId')),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "deleteResource", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ResourcesController.prototype, "getResourcesView", null);
__decorate([
    (0, common_1.Get)(':resourceId'),
    __param(0, (0, common_1.Param)('resourceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "getResourceProfile", null);
exports.ResourcesController = ResourcesController = __decorate([
    (0, common_1.Controller)('resources'),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], ResourcesController);


/***/ }),

/***/ "./src/app/resource-management/resources/resources.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/resource-management/resources/resources.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourcesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/resource-management/resources/commands/index.ts");
const resources_controller_1 = __webpack_require__(/*! ./resources.controller */ "./src/app/resource-management/resources/resources.controller.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/resource-management/resources/queries/index.ts");
let ResourcesModule = class ResourcesModule {
};
exports.ResourcesModule = ResourcesModule;
exports.ResourcesModule = ResourcesModule = __decorate([
    (0, common_1.Module)({
        providers: [...commands_1.commandHandlers, ...queries_1.queryHandlers],
        controllers: [resources_controller_1.ResourcesController],
    })
], ResourcesModule);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/create-resourcetype/create-resourcetype.command.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/create-resourcetype/create-resourcetype.command.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateResourceTypeCommand = void 0;
class CreateResourceTypeCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateResourceTypeCommand = CreateResourceTypeCommand;


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/create-resourcetype/create-resourcetype.handler.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/create-resourcetype/create-resourcetype.handler.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateResourceTypeHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const create_resourcetype_command_1 = __webpack_require__(/*! ./create-resourcetype.command */ "./src/app/resource-management/resourcetypes/commands/create-resourcetype/create-resourcetype.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let CreateResourceTypeHandler = class CreateResourceTypeHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.duplicatesQuery = `
        MATCH (c:Contract)
            WHERE c.id = $contract
        WITH 
            exists(
                (c)--(:ResourceType {typeNo: $typeNo})    
            ) AS typeNoExists,
            exists(
                (c)--(:ResourceType {name: $name})
            ) AS nameExists,
            exists(
                (c)--(:ResourceType {abbrevation: $abbrevation})
            ) AS abbrevationExists
        RETURN {
            typeNo: typeNoExists,
            name: nameExists,
            abbrevation: abbrevationExists
        } AS duplicates
    
    `;
        this.query = `
        MATCH (u:User {uid: $uid})
        MATCH (c:Contract)
            WHERE c.id = $contract
            
        CREATE (rt:ResourceType {
            id: apoc.create.uuid(),
            name: $name,
            abbrevation: $abbrevation,
            typeNo: $typeNo,
            salesDefault: $salesDefault,
            salesOvertime: $salesOvertime,
            color: $color
        })
        
        MERGE (rt)-[:CREATED_BY {timestamp: timestamp()}]->(u)
        MERGE (rt)-[:IS_AGREED_UNDER]->(c)
        
        RETURN rt.id AS id

   `;
    }
    async execute(command) {
        const validation = await this.checkDuplicates(command.dto);
        if (typeof validation !== 'boolean') {
            return validation;
        }
        const resourceTypeId = await this.create(command.dto, command.uid);
        const event = {
            ...command.dto,
            uid: command.uid,
            type: 'resourcetype.created',
            resourceTypeId: resourceTypeId,
        };
        this.publisher.publish(event);
        return new _shared_1.FormSuccessResponse({
            id: resourceTypeId,
        });
    }
    async checkDuplicates(dto) {
        const duplicates = await this.client.read(this.duplicatesQuery, {
            contract: dto.contract,
            typeNo: dto.typeNo,
            abbrevation: dto.abbrevation,
            name: dto.name,
        });
        const result = duplicates.records[0].get('duplicates');
        const errors = {};
        if (result.abbrevation) {
            errors.abbrevation =
                'En ressourcetype med denne forkortelse eksisterer allerede på den valgte kontrakt.';
        }
        if (result.name) {
            errors.name =
                'En ressourcetype med dette navn eksisterer allerede på den valgte kontrakt.';
        }
        if (result.typeNo) {
            errors.typeNo =
                'En ressourcetype med dette typenummer eksisterer allerede på den valgte kontrakt.';
        }
        if (Object.keys(errors).length > 0) {
            return new _shared_1.FormErrorResponse({ validation: errors });
        }
        return true;
    }
    async create(dto, uid) {
        console.log("resources", dto.resources);
        console.log("contract", dto.contract);
        console.log("dto", dto);
        console.log("iod", uid);
        const queryResult = await this.client.write(this.query, {
            ...dto,
            uid: uid,
        });
        const result = queryResult.records[0]?.get('id');
        console.log("resourcetypeID", result);
        return result;
    }
};
exports.CreateResourceTypeHandler = CreateResourceTypeHandler;
exports.CreateResourceTypeHandler = CreateResourceTypeHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_resourcetype_command_1.CreateResourceTypeCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], CreateResourceTypeHandler);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/create-resourcetype/index.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/create-resourcetype/index.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-resourcetype.command */ "./src/app/resource-management/resourcetypes/commands/create-resourcetype/create-resourcetype.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-resourcetype.handler */ "./src/app/resource-management/resourcetypes/commands/create-resourcetype/create-resourcetype.handler.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/delete-resourcetype/delete-resourcetype.command.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/delete-resourcetype/delete-resourcetype.command.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteResourceTypeCommand = void 0;
class DeleteResourceTypeCommand {
    constructor(resourceTypeId, uid) {
        this.resourceTypeId = resourceTypeId;
        this.uid = uid;
    }
}
exports.DeleteResourceTypeCommand = DeleteResourceTypeCommand;


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/delete-resourcetype/delete-resourcetype.handler.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/delete-resourcetype/delete-resourcetype.handler.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteResourceTypeHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const delete_resourcetype_command_1 = __webpack_require__(/*! ./delete-resourcetype.command */ "./src/app/resource-management/resourcetypes/commands/delete-resourcetype/delete-resourcetype.command.ts");
let DeleteResourceTypeHandler = class DeleteResourceTypeHandler {
    async execute(command) {
        throw new Error("Method not implemented.");
    }
};
exports.DeleteResourceTypeHandler = DeleteResourceTypeHandler;
exports.DeleteResourceTypeHandler = DeleteResourceTypeHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_resourcetype_command_1.DeleteResourceTypeCommand)
], DeleteResourceTypeHandler);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/delete-resourcetype/index.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/delete-resourcetype/index.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./delete-resourcetype.command */ "./src/app/resource-management/resourcetypes/commands/delete-resourcetype/delete-resourcetype.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-resourcetype.handler */ "./src/app/resource-management/resourcetypes/commands/delete-resourcetype/delete-resourcetype.handler.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/handlers.ts":
/*!************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/handlers.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commandHandlers = void 0;
const create_resourcetype_1 = __webpack_require__(/*! ./create-resourcetype */ "./src/app/resource-management/resourcetypes/commands/create-resourcetype/index.ts");
const delete_resourcetype_1 = __webpack_require__(/*! ./delete-resourcetype */ "./src/app/resource-management/resourcetypes/commands/delete-resourcetype/index.ts");
const update_resourcetype_1 = __webpack_require__(/*! ./update-resourcetype */ "./src/app/resource-management/resourcetypes/commands/update-resourcetype/index.ts");
exports.commandHandlers = [create_resourcetype_1.CreateResourceTypeHandler, update_resourcetype_1.UpdateResourceTypeHandler, delete_resourcetype_1.DeleteResourceTypeHandler];


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/index.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/resource-management/resourcetypes/commands/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-resourcetype */ "./src/app/resource-management/resourcetypes/commands/create-resourcetype/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-resourcetype */ "./src/app/resource-management/resourcetypes/commands/delete-resourcetype/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-resourcetype */ "./src/app/resource-management/resourcetypes/commands/update-resourcetype/index.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/update-resourcetype/index.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/update-resourcetype/index.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-resourcetype.command */ "./src/app/resource-management/resourcetypes/commands/update-resourcetype/update-resourcetype.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-resourcetype.handler */ "./src/app/resource-management/resourcetypes/commands/update-resourcetype/update-resourcetype.handler.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/update-resourcetype/update-resourcetype.command.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/update-resourcetype/update-resourcetype.command.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateResourceTypeCommand = void 0;
class UpdateResourceTypeCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.UpdateResourceTypeCommand = UpdateResourceTypeCommand;


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/commands/update-resourcetype/update-resourcetype.handler.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/commands/update-resourcetype/update-resourcetype.handler.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateResourceTypeHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const update_resourcetype_command_1 = __webpack_require__(/*! ./update-resourcetype.command */ "./src/app/resource-management/resourcetypes/commands/update-resourcetype/update-resourcetype.command.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let UpdateResourceTypeHandler = class UpdateResourceTypeHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (rt:ResourceType)
            WHERE rt.id = $resourceTypeId
        SET rt += {
            name: $name,
            abbrevation: $abbrevation,
            typeNo: $typeNo,
            salesDefault: $salesDefault,
            salesOvertime: $salesOvertime,
            color: $color
        }
        RETURN {} AS result
   `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        this.publisher.publish({ ...command, type: 'resourcetype.updated' });
        return new _shared_1.FormSuccessResponse({
            message: 'Detaljerne blev opdateret.',
        });
    }
};
exports.UpdateResourceTypeHandler = UpdateResourceTypeHandler;
exports.UpdateResourceTypeHandler = UpdateResourceTypeHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_resourcetype_command_1.UpdateResourceTypeCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], UpdateResourceTypeHandler);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/index.ts":
/*!************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/index.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resourcetypes.module */ "./src/app/resource-management/resourcetypes/resourcetypes.module.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/handlers.ts":
/*!***********************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/handlers.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const resourcetype_options_1 = __webpack_require__(/*! ./resourcetype-options */ "./src/app/resource-management/resourcetypes/queries/resourcetype-options/index.ts");
const resourcetype_profile_1 = __webpack_require__(/*! ./resourcetype-profile */ "./src/app/resource-management/resourcetypes/queries/resourcetype-profile/index.ts");
const resourcetypes_view_1 = __webpack_require__(/*! ./resourcetypes-view */ "./src/app/resource-management/resourcetypes/queries/resourcetypes-view/index.ts");
exports.queryHandlers = [
    resourcetype_options_1.ResourceTypeOptionsHandler,
    resourcetypes_view_1.ResourceTypesViewQueryHandler,
    resourcetype_profile_1.ResourceTypeProfileQueryHandler,
];


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/index.ts":
/*!********************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/index.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/resource-management/resourcetypes/queries/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetype-options */ "./src/app/resource-management/resourcetypes/queries/resourcetype-options/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetype-profile */ "./src/app/resource-management/resourcetypes/queries/resourcetype-profile/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetypes-view */ "./src/app/resource-management/resourcetypes/queries/resourcetypes-view/index.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/resourcetype-options/index.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/resourcetype-options/index.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resourcetype-options.handler */ "./src/app/resource-management/resourcetypes/queries/resourcetype-options/resourcetype-options.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetype-options.query */ "./src/app/resource-management/resourcetypes/queries/resourcetype-options/resourcetype-options.query.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/resourcetype-options/resourcetype-options.handler.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/resourcetype-options/resourcetype-options.handler.ts ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypeOptionsHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const resourcetype_options_query_1 = __webpack_require__(/*! ./resourcetype-options.query */ "./src/app/resource-management/resourcetypes/queries/resourcetype-options/resourcetype-options.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ResourceTypeOptionsHandler = class ResourceTypeOptionsHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (rt:ResourceType)--(c:Contract)
        RETURN {
            value: rt.id,
            label: apoc.text.join([rt.name, c.name], " - "),
            color: rt.color,
            typeNo: rt.typeNo
        } AS resourcetype
            ORDER BY resourcetype.typeNo
`;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, {});
        const result = queryResult.records.map((d) => d.get('resourcetype'));
        return result.map((option) => ({
            value: option.value,
            label: option.label,
            color: option.color,
        }));
    }
};
exports.ResourceTypeOptionsHandler = ResourceTypeOptionsHandler;
exports.ResourceTypeOptionsHandler = ResourceTypeOptionsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(resourcetype_options_query_1.ResourceTypeOptionsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ResourceTypeOptionsHandler);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/resourcetype-options/resourcetype-options.query.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/resourcetype-options/resourcetype-options.query.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypeOptionsQuery = void 0;
class ResourceTypeOptionsQuery {
}
exports.ResourceTypeOptionsQuery = ResourceTypeOptionsQuery;


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/resourcetype-profile/index.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/resourcetype-profile/index.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resourcetype-profile.handler */ "./src/app/resource-management/resourcetypes/queries/resourcetype-profile/resourcetype-profile.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetype-profile.query */ "./src/app/resource-management/resourcetypes/queries/resourcetype-profile/resourcetype-profile.query.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/resourcetype-profile/resourcetype-profile.handler.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/resourcetype-profile/resourcetype-profile.handler.ts ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypeProfileQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const resourcetype_profile_query_1 = __webpack_require__(/*! ./resourcetype-profile.query */ "./src/app/resource-management/resourcetypes/queries/resourcetype-profile/resourcetype-profile.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ResourceTypeProfileQueryHandler = class ResourceTypeProfileQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (rt:ResourceType)--(contract:Contract)
            WHERE rt.id = $resourceTypeId
        CALL {
            WITH rt
            OPTIONAL MATCH (rt)--(:Agent)--(r:Resource)
            WITH collect({
                id: r.id,
                name: r.name,
                initials: r.initials,
                color: r.color,
                costDefault: r.costDefault,
                costOvertime: r.costOvertime
            }) AS resourcesArr
            RETURN CASE
                WHEN resourcesArr[0].id IS NULL
                    THEN []
                ELSE resourcesArr
            END AS resources
        }
        RETURN {
            node: rt{.*},
            contract: contract{.*},
            resources: resources
        } AS result
    `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query, {
            resourceTypeId: query.resourceTypeId,
        });
        const response = queryResult.records[0].get('result');
        return response;
    }
};
exports.ResourceTypeProfileQueryHandler = ResourceTypeProfileQueryHandler;
exports.ResourceTypeProfileQueryHandler = ResourceTypeProfileQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(resourcetype_profile_query_1.ResourceTypeProfileQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ResourceTypeProfileQueryHandler);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/resourcetype-profile/resourcetype-profile.query.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/resourcetype-profile/resourcetype-profile.query.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypeProfileQuery = void 0;
class ResourceTypeProfileQuery {
    constructor(resourceTypeId) {
        this.resourceTypeId = resourceTypeId;
    }
}
exports.ResourceTypeProfileQuery = ResourceTypeProfileQuery;


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/resourcetypes-view/index.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/resourcetypes-view/index.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resourcetype-view.handler */ "./src/app/resource-management/resourcetypes/queries/resourcetypes-view/resourcetype-view.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetypes-view.query */ "./src/app/resource-management/resourcetypes/queries/resourcetypes-view/resourcetypes-view.query.ts"), exports);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/resourcetypes-view/resourcetype-view.handler.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/resourcetypes-view/resourcetype-view.handler.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypesViewQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const resourcetypes_view_query_1 = __webpack_require__(/*! ./resourcetypes-view.query */ "./src/app/resource-management/resourcetypes/queries/resourcetypes-view/resourcetypes-view.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let ResourceTypesViewQueryHandler = class ResourceTypesViewQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (resourceTypes:ResourceType)--(c:Contract)
        UNWIND resourceTypes AS rt
            CALL {
                WITH rt
                OPTIONAL MATCH (rt)--(:Agent)--(r:Resource)
                WITH count(r) AS resourceCount
                RETURN resourceCount
            }
        RETURN {
            id: rt.id,
            node: rt{.*},
            contract: c{.*},
            resourceCount: resourceCount
        } AS row
        ORDER BY row.node.typeNo
   `;
    }
    async execute() {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('row'));
    }
};
exports.ResourceTypesViewQueryHandler = ResourceTypesViewQueryHandler;
exports.ResourceTypesViewQueryHandler = ResourceTypesViewQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(resourcetypes_view_query_1.ResourceTypesViewQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], ResourceTypesViewQueryHandler);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/queries/resourcetypes-view/resourcetypes-view.query.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/queries/resourcetypes-view/resourcetypes-view.query.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypesViewQuery = void 0;
class ResourceTypesViewQuery {
    constructor() { }
}
exports.ResourceTypesViewQuery = ResourceTypesViewQuery;


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/resourcetypes.controller.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/resourcetypes.controller.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/resource-management/resourcetypes/queries/index.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
const util_1 = __webpack_require__(/*! @/libs/util */ "./src/libs/util/index.ts");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/resource-management/resourcetypes/commands/index.ts");
let ResourceTypesController = class ResourceTypesController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async getResourceTypesView() {
        return await this.queryBus.execute(new queries_1.ResourceTypesViewQuery());
    }
    async getResourceTypeOptions() {
        return await this.queryBus.execute(new queries_1.ResourceTypeOptionsQuery());
    }
    async createResourceType(dto, uid) {
        return await this.commandBus.execute(new commands_1.CreateResourceTypeCommand(dto, uid));
    }
    async getResourceTypeProfile(resourceTypeId) {
        return await this.queryBus.execute(new queries_1.ResourceTypeProfileQuery(resourceTypeId));
    }
    async deleteResourceType(resourceTypeId, uid) {
        throw new Error('Not implemented');
    }
    async updateResourceType(resourceTypeId, dto, uid) {
        return await this.commandBus.execute(new commands_1.UpdateResourceTypeCommand({
            ...dto,
            resourceTypeId,
        }, uid));
    }
};
exports.ResourceTypesController = ResourceTypesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ResourceTypesController.prototype, "getResourceTypesView", null);
__decorate([
    (0, common_1.Get)('options'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResourceTypesController.prototype, "getResourceTypeOptions", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof _shared_1.CreateResourceTypeDto !== "undefined" && _shared_1.CreateResourceTypeDto) === "function" ? _d : Object, String]),
    __metadata("design:returntype", Promise)
], ResourceTypesController.prototype, "createResourceType", null);
__decorate([
    (0, common_1.Get)(':resourceTypeId'),
    __param(0, (0, common_1.Param)('resourceTypeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourceTypesController.prototype, "getResourceTypeProfile", null);
__decorate([
    (0, common_1.Delete)(':resourceTypeId'),
    __param(0, (0, common_1.Param)('resourceTypeId')),
    __param(1, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ResourceTypesController.prototype, "deleteResourceType", null);
__decorate([
    (0, common_1.Post)(':resourceTypeId'),
    __param(0, (0, common_1.Param)('resourceTypeId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, util_1.HttpUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof Omit !== "undefined" && Omit) === "function" ? _e : Object, String]),
    __metadata("design:returntype", Promise)
], ResourceTypesController.prototype, "updateResourceType", null);
exports.ResourceTypesController = ResourceTypesController = __decorate([
    (0, common_1.Controller)('resourcetypes'),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], ResourceTypesController);


/***/ }),

/***/ "./src/app/resource-management/resourcetypes/resourcetypes.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/resource-management/resourcetypes/resourcetypes.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/resource-management/resourcetypes/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/resource-management/resourcetypes/queries/index.ts");
const resourcetypes_controller_1 = __webpack_require__(/*! ./resourcetypes.controller */ "./src/app/resource-management/resourcetypes/resourcetypes.controller.ts");
let ResourceTypesModule = class ResourceTypesModule {
};
exports.ResourceTypesModule = ResourceTypesModule;
exports.ResourceTypesModule = ResourceTypesModule = __decorate([
    (0, common_1.Module)({
        providers: [...commands_1.commandHandlers, ...queries_1.queryHandlers],
        controllers: [resourcetypes_controller_1.ResourceTypesController],
    })
], ResourceTypesModule);


/***/ }),

/***/ "./src/app/scheduling/calendars/calendars.controller.ts":
/*!**************************************************************!*\
  !*** ./src/app/scheduling/calendars/calendars.controller.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalendarsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/scheduling/calendars/queries/index.ts");
let CalendarsController = class CalendarsController {
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    async getDefaultCalendar() {
        return this.queryBus.execute(new queries_1.DefaultCalendarQuery());
    }
    async getCalendarOptions() {
        return this.queryBus.execute(new queries_1.CalendarOptionsQuery());
    }
};
exports.CalendarsController = CalendarsController;
__decorate([
    (0, common_1.Get)('default'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalendarsController.prototype, "getDefaultCalendar", null);
__decorate([
    (0, common_1.Get)('options'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalendarsController.prototype, "getCalendarOptions", null);
exports.CalendarsController = CalendarsController = __decorate([
    (0, common_1.Controller)('calendars'),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _a : Object])
], CalendarsController);


/***/ }),

/***/ "./src/app/scheduling/calendars/calendars.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/scheduling/calendars/calendars.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalendarsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commands_1 = __webpack_require__(/*! ./commands */ "./src/app/scheduling/calendars/commands/index.ts");
const queries_1 = __webpack_require__(/*! ./queries */ "./src/app/scheduling/calendars/queries/index.ts");
const calendars_controller_1 = __webpack_require__(/*! ./calendars.controller */ "./src/app/scheduling/calendars/calendars.controller.ts");
let CalendarsModule = class CalendarsModule {
};
exports.CalendarsModule = CalendarsModule;
exports.CalendarsModule = CalendarsModule = __decorate([
    (0, common_1.Module)({
        providers: [...commands_1.commandHandlers, ...queries_1.queryHandlers],
        controllers: [calendars_controller_1.CalendarsController],
    })
], CalendarsModule);


/***/ }),

/***/ "./src/app/scheduling/calendars/commands/create-calendar.command.ts":
/*!**************************************************************************!*\
  !*** ./src/app/scheduling/calendars/commands/create-calendar.command.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCalendarHandler = exports.CreateCalendarCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const _shared_1 = __webpack_require__(/*! @shared */ "../shared/src/index.ts");
class CreateCalendarCommand {
    constructor(dto, uid) {
        this.dto = dto;
        this.uid = uid;
    }
}
exports.CreateCalendarCommand = CreateCalendarCommand;
let CreateCalendarHandler = class CreateCalendarHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (u:User {uid: $uid})
        CREATE (c:Calendar {
            id: apoc.create.uuid(),
            name: $name
        })
        MERGE (c)-[ur:CREATED_BY {timestamp: timestamp()}]->(u)
        RETURN {
            calendar: c{.*},
            user: {
                node: u{.*},
                relation: ur{.*}
            }
        } AS result
    `;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            name: command.dto.name,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        return new _shared_1.FormSuccessResponse({ id: result.calendar.id });
    }
};
exports.CreateCalendarHandler = CreateCalendarHandler;
exports.CreateCalendarHandler = CreateCalendarHandler = __decorate([
    (0, cqrs_1.CommandHandler)(CreateCalendarCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], CreateCalendarHandler);


/***/ }),

/***/ "./src/app/scheduling/calendars/commands/generate-workdays.command.ts":
/*!****************************************************************************!*\
  !*** ./src/app/scheduling/calendars/commands/generate-workdays.command.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenerateWorkDaysHandler = exports.GenerateWorkDaysCommand = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
class GenerateWorkDaysCommand {
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
exports.GenerateWorkDaysCommand = GenerateWorkDaysCommand;
let GenerateWorkDaysHandler = class GenerateWorkDaysHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        UNWIND $days as day
        CALL apoc.merge.node(day.labels, {
            date: day.properties.date
        })
        YIELD node
        SET node += {
            week: toInteger(day.properties.week),
            weekdayName: day.properties.weekdayName,
            weekday: toInteger(day.properties.weekday),
            year: toInteger(day.properties.year)
        }
    `;
        this.syncCalendarsQuery = `
        MATCH (c:Calendar {isDefault: true})
        CALL {
            WITH c
            MATCH (workdays:BusinessDay)
            UNWIND workdays as day
            MERGE (c)-[rel:HAS_WORKDAY]->(day)
            SET rel.capacity = toInteger($capacity)
        }

    `;
    }
    async execute(command) {
        const days = this.mapDays(command.startDate, command.endDate);
        const result = await this.client.write(this.query, { days: days });
        const syncResult = await this.client.write(this.syncCalendarsQuery, { capacity: 480 });
        return { done: true };
    }
    mapDays(startDate, endDate) {
        const interval = luxon_1.Interval.fromDateTimes(luxon_1.DateTime.fromISO(startDate).setZone('utc').setLocale('da'), luxon_1.DateTime.fromISO(endDate).setZone('utc').setLocale('da'));
        return interval.splitBy({ days: 1 }).map((date) => {
            let labels = ['CalendarDay'];
            if ([6, 7].includes(date.start.weekday)) {
                labels.push('Weekend');
            }
            else {
                labels.push('BusinessDay');
            }
            const properties = {
                date: date.start.toFormat('yyyy-MM-dd'),
                week: date.start.weekNumber,
                weekdayName: (0, lodash_1.capitalize)(date.start.toFormat('cccc')),
                weekday: date.start.weekday,
                year: date.start.year,
            };
            return {
                labels: labels,
                properties: properties,
            };
        });
    }
};
exports.GenerateWorkDaysHandler = GenerateWorkDaysHandler;
exports.GenerateWorkDaysHandler = GenerateWorkDaysHandler = __decorate([
    (0, cqrs_1.CommandHandler)(GenerateWorkDaysCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], GenerateWorkDaysHandler);


/***/ }),

/***/ "./src/app/scheduling/calendars/commands/handlers.ts":
/*!***********************************************************!*\
  !*** ./src/app/scheduling/calendars/commands/handlers.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.commandHandlers = void 0;
const create_calendar_command_1 = __webpack_require__(/*! ./create-calendar.command */ "./src/app/scheduling/calendars/commands/create-calendar.command.ts");
const generate_workdays_command_1 = __webpack_require__(/*! ./generate-workdays.command */ "./src/app/scheduling/calendars/commands/generate-workdays.command.ts");
exports.commandHandlers = [create_calendar_command_1.CreateCalendarHandler, generate_workdays_command_1.GenerateWorkDaysHandler];


/***/ }),

/***/ "./src/app/scheduling/calendars/commands/index.ts":
/*!********************************************************!*\
  !*** ./src/app/scheduling/calendars/commands/index.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-calendar.command */ "./src/app/scheduling/calendars/commands/create-calendar.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./generate-workdays.command */ "./src/app/scheduling/calendars/commands/generate-workdays.command.ts"), exports);
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/scheduling/calendars/commands/handlers.ts"), exports);


/***/ }),

/***/ "./src/app/scheduling/calendars/queries/calendar-options/calendar-options.handler.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/scheduling/calendars/queries/calendar-options/calendar-options.handler.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalendarOptionsQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const calendar_options_query_1 = __webpack_require__(/*! ./calendar-options.query */ "./src/app/scheduling/calendars/queries/calendar-options/calendar-options.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let CalendarOptionsQueryHandler = class CalendarOptionsQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (c:Calendar)
        WITH c ORDER BY c.name
        
        RETURN {
            value: c.id,
            label: c.name,
            isDefault: c.isDefault
        } AS option
  
    `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('option'));
    }
};
exports.CalendarOptionsQueryHandler = CalendarOptionsQueryHandler;
exports.CalendarOptionsQueryHandler = CalendarOptionsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(calendar_options_query_1.CalendarOptionsQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], CalendarOptionsQueryHandler);


/***/ }),

/***/ "./src/app/scheduling/calendars/queries/calendar-options/calendar-options.query.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/scheduling/calendars/queries/calendar-options/calendar-options.query.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalendarOptionsQuery = void 0;
class CalendarOptionsQuery {
}
exports.CalendarOptionsQuery = CalendarOptionsQuery;


/***/ }),

/***/ "./src/app/scheduling/calendars/queries/calendar-options/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/scheduling/calendars/queries/calendar-options/index.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./calendar-options.handler */ "./src/app/scheduling/calendars/queries/calendar-options/calendar-options.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./calendar-options.query */ "./src/app/scheduling/calendars/queries/calendar-options/calendar-options.query.ts"), exports);


/***/ }),

/***/ "./src/app/scheduling/calendars/queries/default-calendar/default-calendar.handler.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/scheduling/calendars/queries/default-calendar/default-calendar.handler.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultCalendarQueryHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const default_calendar_query_1 = __webpack_require__(/*! ./default-calendar.query */ "./src/app/scheduling/calendars/queries/default-calendar/default-calendar.query.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
let DefaultCalendarQueryHandler = class DefaultCalendarQueryHandler {
    constructor(client) {
        this.client = client;
        this.query = `
        MATCH (c:Calendar)
            WHERE c.isDefault
        RETURN c{.*} AS calendar
    `;
    }
    async execute(query) {
        const queryResult = await this.client.read(this.query);
        return queryResult.records[0].get('calendar');
    }
};
exports.DefaultCalendarQueryHandler = DefaultCalendarQueryHandler;
exports.DefaultCalendarQueryHandler = DefaultCalendarQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(default_calendar_query_1.DefaultCalendarQuery),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], DefaultCalendarQueryHandler);


/***/ }),

/***/ "./src/app/scheduling/calendars/queries/default-calendar/default-calendar.query.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/scheduling/calendars/queries/default-calendar/default-calendar.query.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultCalendarQuery = void 0;
class DefaultCalendarQuery {
}
exports.DefaultCalendarQuery = DefaultCalendarQuery;


/***/ }),

/***/ "./src/app/scheduling/calendars/queries/default-calendar/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/scheduling/calendars/queries/default-calendar/index.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./default-calendar.handler */ "./src/app/scheduling/calendars/queries/default-calendar/default-calendar.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./default-calendar.query */ "./src/app/scheduling/calendars/queries/default-calendar/default-calendar.query.ts"), exports);


/***/ }),

/***/ "./src/app/scheduling/calendars/queries/handlers.ts":
/*!**********************************************************!*\
  !*** ./src/app/scheduling/calendars/queries/handlers.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryHandlers = void 0;
const calendar_options_1 = __webpack_require__(/*! ./calendar-options */ "./src/app/scheduling/calendars/queries/calendar-options/index.ts");
const default_calendar_1 = __webpack_require__(/*! ./default-calendar */ "./src/app/scheduling/calendars/queries/default-calendar/index.ts");
exports.queryHandlers = [calendar_options_1.CalendarOptionsQueryHandler, default_calendar_1.DefaultCalendarQueryHandler];


/***/ }),

/***/ "./src/app/scheduling/calendars/queries/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/scheduling/calendars/queries/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./handlers */ "./src/app/scheduling/calendars/queries/handlers.ts"), exports);
__exportStar(__webpack_require__(/*! ./calendar-options */ "./src/app/scheduling/calendars/queries/calendar-options/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./default-calendar */ "./src/app/scheduling/calendars/queries/default-calendar/index.ts"), exports);


/***/ }),

/***/ "./src/app/scheduling/scheduler/scheduler.event-listener.ts":
/*!******************************************************************!*\
  !*** ./src/app/scheduling/scheduler/scheduler.event-listener.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchedulerEventListener = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const events_1 = __webpack_require__(/*! @/libs/events */ "./src/libs/events/index.ts");
const sync_bookings_1 = __webpack_require__(/*! ./sync-bookings */ "./src/app/scheduling/scheduler/sync-bookings/index.ts");
let SchedulerEventListener = class SchedulerEventListener {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    async onAllocationCreated(event) {
        await this.commandBus.execute(new sync_bookings_1.SyncBookingsCommand(event.id, event.uid));
    }
    async onPeriodUpdated(event) {
        if (event.body.kind === 'Allocation') {
            await this.commandBus.execute(new sync_bookings_1.SyncBookingsCommand(event.body.activityId, event.uid));
        }
    }
    async onAllocationUpdated(event) {
        await this.commandBus.execute(new sync_bookings_1.SyncBookingsCommand(event.body.allocationId, event.uid));
    }
};
exports.SchedulerEventListener = SchedulerEventListener;
__decorate([
    (0, microservices_1.EventPattern)('allocation.created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof events_1.AllocationCreatedEvent !== "undefined" && events_1.AllocationCreatedEvent) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], SchedulerEventListener.prototype, "onAllocationCreated", null);
__decorate([
    (0, microservices_1.EventPattern)('activity.period.updated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof events_1.PeriodUpdatedEvent !== "undefined" && events_1.PeriodUpdatedEvent) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], SchedulerEventListener.prototype, "onPeriodUpdated", null);
__decorate([
    (0, microservices_1.EventPattern)('allocation.updated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof events_1.AllocationUpdatedEvent !== "undefined" && events_1.AllocationUpdatedEvent) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], SchedulerEventListener.prototype, "onAllocationUpdated", null);
exports.SchedulerEventListener = SchedulerEventListener = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object])
], SchedulerEventListener);


/***/ }),

/***/ "./src/app/scheduling/scheduler/scheduler.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/scheduling/scheduler/scheduler.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchedulerModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sync_bookings_1 = __webpack_require__(/*! ./sync-bookings */ "./src/app/scheduling/scheduler/sync-bookings/index.ts");
const scheduler_event_listener_1 = __webpack_require__(/*! ./scheduler.event-listener */ "./src/app/scheduling/scheduler/scheduler.event-listener.ts");
let SchedulerModule = class SchedulerModule {
};
exports.SchedulerModule = SchedulerModule;
exports.SchedulerModule = SchedulerModule = __decorate([
    (0, common_1.Module)({
        providers: [sync_bookings_1.SyncBookingsHandler, scheduler_event_listener_1.SchedulerEventListener],
    })
], SchedulerModule);


/***/ }),

/***/ "./src/app/scheduling/scheduler/sync-bookings/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/scheduling/scheduler/sync-bookings/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./sync-bookings.handler */ "./src/app/scheduling/scheduler/sync-bookings/sync-bookings.handler.ts"), exports);
__exportStar(__webpack_require__(/*! ./sync-bookings.command */ "./src/app/scheduling/scheduler/sync-bookings/sync-bookings.command.ts"), exports);


/***/ }),

/***/ "./src/app/scheduling/scheduler/sync-bookings/sync-bookings.command.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/scheduling/scheduler/sync-bookings/sync-bookings.command.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SyncBookingsCommand = void 0;
class SyncBookingsCommand {
    constructor(allocationId, uid) {
        this.allocationId = allocationId;
        this.uid = uid;
    }
}
exports.SyncBookingsCommand = SyncBookingsCommand;


/***/ }),

/***/ "./src/app/scheduling/scheduler/sync-bookings/sync-bookings.handler.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/scheduling/scheduler/sync-bookings/sync-bookings.handler.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SyncBookingsHandler = void 0;
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const sync_bookings_command_1 = __webpack_require__(/*! ./sync-bookings.command */ "./src/app/scheduling/scheduler/sync-bookings/sync-bookings.command.ts");
const neo4j_1 = __webpack_require__(/*! @/libs/neo4j */ "./src/libs/neo4j/index.ts");
const cqrs_2 = __webpack_require__(/*! @/libs/cqrs */ "./src/libs/cqrs/index.ts");
let SyncBookingsHandler = class SyncBookingsHandler {
    constructor(client, publisher) {
        this.client = client;
        this.publisher = publisher;
        this.query = `
        MATCH (w:Workpackage)-[:HAS*4]->(allocation:Allocation)--(a:Agent)--(resource:Resource)--(calendar:Calendar)
            WHERE allocation.id = $allocationId
        CALL {
            WITH allocation
            RETURN allocation.defaultMinutes + allocation.overtimeMinutes AS totalWork
        }
        CALL {
            WITH calendar, allocation
            MATCH (calendar)-[:HAS_WORKDAY]->(day:CalendarDay)
                WHERE date(day.date) >= date(allocation.startDate) AND date(day.date) <= date(allocation.endDate)
            WITH 
                collect(day) as workdays, 
                collect(day{.*}) as workdayProperties
            RETURN workdays, workdayProperties
        }
        CALL {
            WITH workdays, totalWork
            WITH *, size(workdays) AS workdayCount
            RETURN CASE 
                WHEN workdayCount = 0
                    THEN 0
                ELSE round(totalWork/workdayCount,8)
            END AS dailyWork
        }

        CALL {
            WITH workdays, dailyWork, allocation, resource
            UNWIND workdays AS workday
                MERGE (allocation)-[b:HAS_BOOKING]->(workday)
                    SET b.duration = dailyWork
        }
        CALL {
            WITH allocation
            MATCH (allocation)-[r:HAS_BOOKING]->(day:CalendarDay)
                WHERE date(day.date) < date(allocation.startDate) OR date(day.date) > date(allocation.endDate)
            DETACH DELETE r
        }
        RETURN w.id AS workpackageId, a.id AS agentId
`;
    }
    async execute(command) {
        const queryResult = await this.client.write(this.query, {
            allocationId: command.allocationId,
            uid: command.uid,
        });
        const workpackageId = queryResult.records[0]?.get('workpackageId');
        const agentId = queryResult.records[0]?.get('agentId');
        if (workpackageId && agentId) {
            this.publisher.publish({
                type: 'bookings.synced',
                allocationId: command.allocationId,
                workpackageId: workpackageId,
                agentId: agentId,
                uid: command.uid,
            });
        }
    }
};
exports.SyncBookingsHandler = SyncBookingsHandler;
exports.SyncBookingsHandler = SyncBookingsHandler = __decorate([
    (0, cqrs_1.CommandHandler)(sync_bookings_command_1.SyncBookingsCommand),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object, typeof (_b = typeof cqrs_2.DomainEventPublisher !== "undefined" && cqrs_2.DomainEventPublisher) === "function" ? _b : Object])
], SyncBookingsHandler);


/***/ }),

/***/ "./src/app/scheduling/scheduling.module.ts":
/*!*************************************************!*\
  !*** ./src/app/scheduling/scheduling.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchedulingModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const calendars_module_1 = __webpack_require__(/*! ./calendars/calendars.module */ "./src/app/scheduling/calendars/calendars.module.ts");
const scheduler_module_1 = __webpack_require__(/*! ./scheduler/scheduler.module */ "./src/app/scheduling/scheduler/scheduler.module.ts");
let SchedulingModule = class SchedulingModule {
};
exports.SchedulingModule = SchedulingModule;
exports.SchedulingModule = SchedulingModule = __decorate([
    (0, common_1.Module)({
        imports: [calendars_module_1.CalendarsModule, scheduler_module_1.SchedulerModule],
    })
], SchedulingModule);


/***/ }),

/***/ "./src/libs/cqrs/cqrs.module.ts":
/*!**************************************!*\
  !*** ./src/libs/cqrs/cqrs.module.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CQRSModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const domain_event_publisher_1 = __webpack_require__(/*! ./domain-event-publisher */ "./src/libs/cqrs/domain-event-publisher.ts");
const nestjs_cqrs_event_publisher_1 = __webpack_require__(/*! ./nestjs-cqrs-event-publisher */ "./src/libs/cqrs/nestjs-cqrs-event-publisher.ts");
const cqrs_1 = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
let CQRSModule = class CQRSModule {
};
exports.CQRSModule = CQRSModule;
exports.CQRSModule = CQRSModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule, event_emitter_1.EventEmitterModule.forRoot({ wildcard: true, delimiter: '*' })],
        providers: [
            {
                provide: domain_event_publisher_1.DomainEventPublisher,
                useClass: nestjs_cqrs_event_publisher_1.NestJSCqrsEventPublisher,
            },
        ],
        exports: [domain_event_publisher_1.DomainEventPublisher, cqrs_1.CqrsModule, event_emitter_1.EventEmitterModule],
    })
], CQRSModule);


/***/ }),

/***/ "./src/libs/cqrs/domain-event-publisher.ts":
/*!*************************************************!*\
  !*** ./src/libs/cqrs/domain-event-publisher.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomainEventPublisher = void 0;
class DomainEventPublisher {
}
exports.DomainEventPublisher = DomainEventPublisher;


/***/ }),

/***/ "./src/libs/cqrs/domain-event.ts":
/*!***************************************!*\
  !*** ./src/libs/cqrs/domain-event.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/libs/cqrs/index.ts":
/*!********************************!*\
  !*** ./src/libs/cqrs/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./domain-event */ "./src/libs/cqrs/domain-event.ts"), exports);
__exportStar(__webpack_require__(/*! ./cqrs.module */ "./src/libs/cqrs/cqrs.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./domain-event-publisher */ "./src/libs/cqrs/domain-event-publisher.ts"), exports);


/***/ }),

/***/ "./src/libs/cqrs/nestjs-cqrs-event-publisher.ts":
/*!******************************************************!*\
  !*** ./src/libs/cqrs/nestjs-cqrs-event-publisher.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NestJSCqrsEventPublisher = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
let NestJSCqrsEventPublisher = class NestJSCqrsEventPublisher {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
    }
    publish(event) {
        console.log('Is publishing event:', event.type);
        const payload = this.serializeEvent(event);
        this.eventEmitter.emit(event.type, payload);
    }
    serializeEvent(event) {
        return {
            timestamp: new Date().toISOString(),
            ...(0, class_transformer_1.instanceToPlain)(event),
        };
    }
};
exports.NestJSCqrsEventPublisher = NestJSCqrsEventPublisher;
exports.NestJSCqrsEventPublisher = NestJSCqrsEventPublisher = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _a : Object])
], NestJSCqrsEventPublisher);


/***/ }),

/***/ "./src/libs/db-initializer/db_init.module.ts":
/*!***************************************************!*\
  !*** ./src/libs/db-initializer/db_init.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DBInitModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const neo4j_1 = __webpack_require__(/*! ../neo4j */ "./src/libs/neo4j/index.ts");
const db_init_service_1 = __webpack_require__(/*! ./db_init.service */ "./src/libs/db-initializer/db_init.service.ts");
let DBInitModule = class DBInitModule {
};
exports.DBInitModule = DBInitModule;
exports.DBInitModule = DBInitModule = __decorate([
    (0, common_1.Module)({
        imports: [neo4j_1.Neo4jModule],
        providers: [db_init_service_1.DBInitService],
    })
], DBInitModule);


/***/ }),

/***/ "./src/libs/db-initializer/db_init.service.ts":
/*!****************************************************!*\
  !*** ./src/libs/db-initializer/db_init.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DBInitService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const neo4j_1 = __webpack_require__(/*! ../neo4j */ "./src/libs/neo4j/index.ts");
let DBInitService = class DBInitService {
    constructor(client) {
        this.client = client;
    }
    async onModuleInit() {
        const isDatabaseNew = await this.determineIfDatabaseIsNew();
        if (isDatabaseNew) {
            await this.createIndexes();
            const contractId = await this.contract();
            await this.financialsources();
            await this.createBookingStages();
            await this.createDefaultProjectManager();
            await this.createStages();
            await this.createCalendarDays();
            await this.createResourceAgents(contractId);
            await this.createDefaultUser();
            console.log('Ran new db script');
        }
        else {
            console.log('db is not new.');
        }
    }
    async determineIfDatabaseIsNew() {
        console.log('Is checking DB');
        const queryResult = await this.client.read(`
            OPTIONAL MATCH (pm:DefaultProjectManager) 
            RETURN CASE 
                WHEN pm IS NOT NULL 
                    then false
                else true
            END AS isDatabaseNew`);
        return queryResult?.records[0]?.get('isDatabaseNew');
    }
    async createIndexes() {
        const session = this.client.driver.session();
        const constraints = [
            'CREATE CONSTRAINT constraint_uid IF NOT EXISTS FOR (w:User) REQUIRE (w.uid) IS UNIQUE',
            'CREATE CONSTRAINT constraints_workpackage_systematicName IF NOT EXISTS FOR (w:Workpackage) REQUIRE w.systematicName IS UNIQUE',
            'CREATE CONSTRAINT constraints_activity_id IF NOT EXISTS FOR (a0:Activity) REQUIRE a0.id IS UNIQUE',
            'CREATE CONSTRAINT constraints_resource_id IF NOT EXISTS FOR (r:Resource) REQUIRE r.id IS UNIQUE',
            'CREATE CONSTRAINT constraints_resourceType_id IF NOT EXISTS FOR (rt:ResourceType) REQUIRE rt.id IS UNIQUE',
            'CREATE CONSTRAINT constraints_agent IF NOT EXISTS FOR (ag:Agent) REQUIRE ag.id IS UNIQUE',
            'CREATE CONSTRAINT constraints_stage IF NOT EXISTS FOR (s:Stage) REQUIRE s.name IS UNIQUE',
            'CREATE CONSTRAINT constraints_bookingstage IF NOT EXISTS FOR (b:BookingStage) REQUIRE b.name IS UNIQUE',
            'CREATE CONSTRAINT constraints_contract IF NOT EXISTS FOR (c:Contract) REQUIRE (c.id, c.name, c.abbrevation) IS UNIQUE',
            'CREATE CONSTRAINT constraints_financialsource IF NOT EXISTS FOR (f:FinancialSource) REQUIRE (f.id, f.name) IS UNIQUE',
            'CREATE RANGE INDEX calendarday_weekYear_index IF NOT EXISTS FOR (c1:CalendarDay) ON (c1.week, c1.year)',
            'CREATE RANGE INDEX calendarday_date_index IF NOT EXISTS FOR (c2:CalendarDay) ON c2.date',
            'CREATE RANGE INDEX activity_interval IF NOT EXISTS FOR (a2:Activity) ON (a2.startDate, a2.endDate)',
            'CREATE RANGE INDEX activity_startDate IF NOT EXISTS FOR (a3:Activity) ON a3.startDate',
            'CREATE RANGE INDEX activity_endDate IF NOT EXISTS FOR (a3:Activity) ON a3.endDate',
        ];
        for (let i = 0; i < constraints.length; i++) {
            await session.run(constraints[i]);
        }
        await session.close();
    }
    async createDefaultProjectManager() {
        await this.client.write(`
            MERGE (:ProjectManager:DefaultProjectManager {
                color: "CECECE",
                id: "95fde6bc-fef3-488c-811f-044a9c135782",
                name: "Ingen"
            })
        `);
    }
    mapDays(startDate, endDate) {
        const interval = luxon_1.Interval.fromDateTimes(luxon_1.DateTime.fromISO(startDate).setZone('utc').setLocale('da'), luxon_1.DateTime.fromISO(endDate).setZone('utc').setLocale('da'));
        return interval.splitBy({ days: 1 }).map((date) => {
            let labels = ['CalendarDay'];
            if ([6, 7].includes(date.start.weekday)) {
                labels.push('Weekend');
            }
            else {
                labels.push('BusinessDay');
            }
            const properties = {
                date: date.start.toFormat('yyyy-MM-dd'),
                week: date.start.weekNumber,
                weekdayName: (0, lodash_1.capitalize)(date.start.toFormat('cccc')),
                weekday: date.start.weekday,
                year: date.start.year,
            };
            return {
                labels: labels,
                properties: properties,
            };
        });
    }
    async createCalendarDays() {
        const days = this.mapDays(luxon_1.DateTime.now().minus({ years: 2 }).toFormat('yyyy-MM-dd'), luxon_1.DateTime.now().plus({ years: 5 }).toFormat('yyyy-MM-dd'));
        await this.client.write(`
            MERGE (c:Calendar {
                isDefault: true
            })
            SET c += {
                name: "Standardkalender",
                id: apoc.create.uuid()
            }   
            WITH c
            CALL {
                WITH c
                MATCH (r:Resource)
                UNWIND r AS R
                MERGE (R)-[:USES]->(c)
            }     
            UNWIND $days as day
            CALL apoc.merge.node(day.labels, {
                date: day.properties.date
            })
            YIELD node
        
            CALL {
                WITH node, day
                SET node += {
                    week: toInteger(day.properties.week),
                    weekdayName: day.properties.weekdayName,
                    weekday: toInteger(day.properties.weekday),
                    year: toInteger(day.properties.year)
                }
            }
        
        `, { days: days });
        await this.client.write(`
            MATCH (c:Calendar {isDefault: true})
            MATCH (d:BusinessDay)
            UNWIND d as day
                MERGE (c)-[:HAS_WORKDAY {capacity: $capacity}]->(day)
        
        `, { capacity: 480 });
    }
    async createStages() {
        await this.client.write(`
            MERGE (:Stage {
                color: "#636ECF",
                name: "Ny",
                sequence: 0
            })
            MERGE (:Stage {
                color: "#3541AC",
                name: "Tilbud",
                sequence: 1
            })
            MERGE (:Stage {
                color: "#AF74E7",
                name: "Implementering",
                sequence: 2
            })
            MERGE (:Stage {
                color: "#3C8299",
                name: "Gennemført",
                sequence: 3
            })
            MERGE (:Stage {
                color: "#E8C387",
                name: "På hold",
                sequence: 4
            })
            MERGE (:Stage {
                color: "#DE3F4A",
                name: "Annulleret",
                sequence: 5
            })
        `);
    }
    async createBookingStages() {
        await this.client.write(`
            MERGE (:BookingStage {
                color: "#A8C5DA",
                name: "Ingen",
                sequence: 0
            })
            MERGE (:BookingStage {
                color: "#95A4FC",
                name: "Hard",
                sequence: 2
            })
            MERGE (:BookingStage {
                color: "#AF74E7",
                name: "Soft",
                sequence: 1
            })
        `);
    }
    async contract() {
        const result = await this.client.write(`
            MERGE (c:Contract {name: "Kundekontrakt 1", abbrevation: "kon1"})
            ON CREATE
                SET c.id = apoc.create.uuid()
            RETURN c.id AS contractId
        `);
        return result.records[0].get('contractId');
    }
    async financialsources() {
        await this.client.write(`
            WITH ["FIN1", "FIN2", "FIN3", "FIN4"] as ss
            UNWIND ss AS s
                MERGE (f:FinancialSource {name: s})
                    ON CREATE 
                        SET f.id = apoc.create.uuid()
        `);
    }
    async createResourceAgents(contractId) {
        await this.client.write(`
				CALL {
					MATCH (c:Contract)
						WHERE c.id = $contractId
					CREATE (rt:ResourceType {
						id: apoc.create.uuid(),
						name: "Projektleder",
						abbrevation: "PL",
						salesDefault: 400,
						salesOvertime: 500,
						typeNo: 1,
						color: "#fd7e14"
					})
					MERGE (rt)-[:IS_AGREED_UNDER]->(c)
					RETURN rt
				}
				
				CALL {
					WITH rt
					MATCH (c:Calendar)
						WHERE c.isDefault = true
						
					CREATE (r:Resource {
						id: apoc.create.uuid(),
						name: "Jens Jensen",
						initials: "JJ",
						costDefault: 300,
						costOvertime: 400,
						color: "#228be6"
					})
					
					RETURN r
				}
				
				CALL {
					WITH rt, r
					MERGE (a:Agent {
						id: apoc.create.uuid()
					})
					MERGE (a)-[:IS]->(r)
					MERGE (a)-[:IS]->(rt)
				}
			`, {
            contractId: contractId,
        });
    }
    async createDefaultUser() {
        await this.client.write(`
			CREATE (u:User {
				uid: "user1",
				name: "Test User",
				email: "test@email.com",
				color: "#FF5733",
				isDeactivated: false,
				lastSeen: null,
				isOnline: false
			})
		`);
    }
};
exports.DBInitService = DBInitService;
exports.DBInitService = DBInitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_1.Neo4jClient !== "undefined" && neo4j_1.Neo4jClient) === "function" ? _a : Object])
], DBInitService);


/***/ }),

/***/ "./src/libs/events/allocation-created.event.ts":
/*!*****************************************************!*\
  !*** ./src/libs/events/allocation-created.event.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/libs/events/allocation-updated.event.ts":
/*!*****************************************************!*\
  !*** ./src/libs/events/allocation-updated.event.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/libs/events/index.ts":
/*!**********************************!*\
  !*** ./src/libs/events/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resource-created.event */ "./src/libs/events/resource-created.event.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetype.created.event */ "./src/libs/events/resourcetype.created.event.ts"), exports);
__exportStar(__webpack_require__(/*! ./allocation-created.event */ "./src/libs/events/allocation-created.event.ts"), exports);
__exportStar(__webpack_require__(/*! ./period-updated.event */ "./src/libs/events/period-updated.event.ts"), exports);
__exportStar(__webpack_require__(/*! ./allocation-updated.event */ "./src/libs/events/allocation-updated.event.ts"), exports);


/***/ }),

/***/ "./src/libs/events/period-updated.event.ts":
/*!*************************************************!*\
  !*** ./src/libs/events/period-updated.event.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/libs/events/resource-created.event.ts":
/*!***************************************************!*\
  !*** ./src/libs/events/resource-created.event.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/libs/events/resourcetype.created.event.ts":
/*!*******************************************************!*\
  !*** ./src/libs/events/resourcetype.created.event.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/libs/mongodb/index.ts":
/*!***********************************!*\
  !*** ./src/libs/mongodb/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./mongo.module */ "./src/libs/mongodb/mongo.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./mongodb.client */ "./src/libs/mongodb/mongodb.client.ts"), exports);


/***/ }),

/***/ "./src/libs/mongodb/mongo-constants.ts":
/*!*********************************************!*\
  !*** ./src/libs/mongodb/mongo-constants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MONGO_CLIENT_TOKEN = void 0;
exports.MONGO_CLIENT_TOKEN = "MONGO_CLIENT";


/***/ }),

/***/ "./src/libs/mongodb/mongo.module.ts":
/*!******************************************!*\
  !*** ./src/libs/mongodb/mongo.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongoModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongodb_client_1 = __webpack_require__(/*! ./mongodb.client */ "./src/libs/mongodb/mongodb.client.ts");
const mongodb_provider_1 = __webpack_require__(/*! ./mongodb.provider */ "./src/libs/mongodb/mongodb.provider.ts");
let MongoModule = class MongoModule {
};
exports.MongoModule = MongoModule;
exports.MongoModule = MongoModule = __decorate([
    (0, common_1.Module)({
        providers: [mongodb_provider_1.MongoClientProvider, mongodb_client_1.MongoClient],
        exports: [mongodb_client_1.MongoClient],
    })
], MongoModule);


/***/ }),

/***/ "./src/libs/mongodb/mongodb.client.ts":
/*!********************************************!*\
  !*** ./src/libs/mongodb/mongodb.client.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongoClient = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongo_constants_1 = __webpack_require__(/*! ./mongo-constants */ "./src/libs/mongodb/mongo-constants.ts");
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
let MongoClient = class MongoClient {
    constructor(client) {
        this.client = client;
        this.db = this.client.db(process.env.NODE_ENV === 'production' ? 'prod' : 'dev');
        this.events = this.db.collection('events');
    }
};
exports.MongoClient = MongoClient;
exports.MongoClient = MongoClient = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(mongo_constants_1.MONGO_CLIENT_TOKEN)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongodb_1.MongoClient !== "undefined" && mongodb_1.MongoClient) === "function" ? _a : Object])
], MongoClient);


/***/ }),

/***/ "./src/libs/mongodb/mongodb.provider.ts":
/*!**********************************************!*\
  !*** ./src/libs/mongodb/mongodb.provider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MongoClientProvider = void 0;
const mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
const mongo_constants_1 = __webpack_require__(/*! ./mongo-constants */ "./src/libs/mongodb/mongo-constants.ts");
exports.MongoClientProvider = {
    provide: mongo_constants_1.MONGO_CLIENT_TOKEN,
    useFactory: async () => {
        return new mongodb_1.MongoClient(process.env.MONGO_CONN);
    },
};


/***/ }),

/***/ "./src/libs/neo4j/index.ts":
/*!*********************************!*\
  !*** ./src/libs/neo4j/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./neo4j.module */ "./src/libs/neo4j/neo4j.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./neo4j.client */ "./src/libs/neo4j/neo4j.client.ts"), exports);


/***/ }),

/***/ "./src/libs/neo4j/neo4j-constants.ts":
/*!*******************************************!*\
  !*** ./src/libs/neo4j/neo4j-constants.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NEO4J_TOKEN = void 0;
exports.NEO4J_TOKEN = "NEO4J";


/***/ }),

/***/ "./src/libs/neo4j/neo4j.client.ts":
/*!****************************************!*\
  !*** ./src/libs/neo4j/neo4j.client.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jClient = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const neo4j_driver_1 = __webpack_require__(/*! neo4j-driver */ "neo4j-driver");
const neo4j_constants_1 = __webpack_require__(/*! ./neo4j-constants */ "./src/libs/neo4j/neo4j-constants.ts");
let Neo4jClient = class Neo4jClient {
    constructor(driver) {
        this.driver = driver;
    }
    async write(q, params) {
        const session = this.driver.session();
        let result;
        try {
            result = await session.executeWrite((tx) => tx.run(q, params));
        }
        catch (e) {
            console.log(e);
        }
        finally {
            await session.close();
        }
        return result;
    }
    async read(q, params) {
        const session = this.driver.session();
        let result;
        try {
            result = await session.executeRead((tx) => tx.run(q, params));
        }
        catch (e) {
            console.log(e);
        }
        finally {
            await session.close();
        }
        return result;
    }
};
exports.Neo4jClient = Neo4jClient;
exports.Neo4jClient = Neo4jClient = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(neo4j_constants_1.NEO4J_TOKEN)),
    __metadata("design:paramtypes", [typeof (_a = typeof neo4j_driver_1.Driver !== "undefined" && neo4j_driver_1.Driver) === "function" ? _a : Object])
], Neo4jClient);


/***/ }),

/***/ "./src/libs/neo4j/neo4j.module.ts":
/*!****************************************!*\
  !*** ./src/libs/neo4j/neo4j.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const neo4j_client_1 = __webpack_require__(/*! ./neo4j.client */ "./src/libs/neo4j/neo4j.client.ts");
const neo4j_provider_1 = __webpack_require__(/*! ./neo4j.provider */ "./src/libs/neo4j/neo4j.provider.ts");
let Neo4jModule = class Neo4jModule {
};
exports.Neo4jModule = Neo4jModule;
exports.Neo4jModule = Neo4jModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [neo4j_provider_1.Neo4jProvider, neo4j_client_1.Neo4jClient],
        exports: [neo4j_client_1.Neo4jClient],
    })
], Neo4jModule);


/***/ }),

/***/ "./src/libs/neo4j/neo4j.provider.ts":
/*!******************************************!*\
  !*** ./src/libs/neo4j/neo4j.provider.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jProvider = void 0;
const neo4j_constants_1 = __webpack_require__(/*! ./neo4j-constants */ "./src/libs/neo4j/neo4j-constants.ts");
const neo4j_driver_1 = __webpack_require__(/*! neo4j-driver */ "neo4j-driver");
exports.Neo4jProvider = {
    provide: neo4j_constants_1.NEO4J_TOKEN,
    useFactory: () => {
        console.log(process.env.NEO4J_CONN);
        return neo4j_driver_1.default.driver(process.env.NEO4J_CONN || 'bolt://neo4j:7687', neo4j_driver_1.default.auth.basic('neo4j', 'password'), { disableLosslessIntegers: true });
    },
};


/***/ }),

/***/ "./src/libs/util/decorators/HttpUid.ts":
/*!*********************************************!*\
  !*** ./src/libs/util/decorators/HttpUid.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.HttpUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request?.user?.uid ?? 'user1';
});


/***/ }),

/***/ "./src/libs/util/decorators/UserId.ts":
/*!********************************************!*\
  !*** ./src/libs/util/decorators/UserId.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserId = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.UserId = (0, common_1.createParamDecorator)((data, ctx) => {
    return ctx.args[0].handshake.auth.uid;
});


/***/ }),

/***/ "./src/libs/util/decorators/index.ts":
/*!*******************************************!*\
  !*** ./src/libs/util/decorators/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./HttpUid */ "./src/libs/util/decorators/HttpUid.ts"), exports);
__exportStar(__webpack_require__(/*! ./UserId */ "./src/libs/util/decorators/UserId.ts"), exports);


/***/ }),

/***/ "./src/libs/util/index.ts":
/*!********************************!*\
  !*** ./src/libs/util/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./decorators */ "./src/libs/util/decorators/index.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/auth/create-user.dto.ts":
/*!*************************************************!*\
  !*** ../shared/src/dto/auth/create-user.dto.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "../shared/src/dto/auth/index.ts":
/*!***************************************!*\
  !*** ../shared/src/dto/auth/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-user.dto */ "../shared/src/dto/auth/create-user.dto.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/index.ts":
/*!**********************************!*\
  !*** ../shared/src/dto/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth */ "../shared/src/dto/auth/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./resource-management */ "../shared/src/dto/resource-management/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./organization */ "../shared/src/dto/organization/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./project-management */ "../shared/src/dto/project-management/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./scheduling */ "../shared/src/dto/scheduling/index.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/organization/contracts/contract.node.ts":
/*!*****************************************************************!*\
  !*** ../shared/src/dto/organization/contracts/contract.node.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContractNode = void 0;
class ContractNode {
}
exports.ContractNode = ContractNode;


/***/ }),

/***/ "../shared/src/dto/organization/contracts/contract.view-row.ts":
/*!*********************************************************************!*\
  !*** ../shared/src/dto/organization/contracts/contract.view-row.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContractViewRow = void 0;
class ContractViewRow {
}
exports.ContractViewRow = ContractViewRow;


/***/ }),

/***/ "../shared/src/dto/organization/contracts/create-contract.dto.ts":
/*!***********************************************************************!*\
  !*** ../shared/src/dto/organization/contracts/create-contract.dto.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateContractDto = void 0;
class CreateContractDto {
}
exports.CreateContractDto = CreateContractDto;


/***/ }),

/***/ "../shared/src/dto/organization/contracts/index.ts":
/*!*********************************************************!*\
  !*** ../shared/src/dto/organization/contracts/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-contract.dto */ "../shared/src/dto/organization/contracts/update-contract.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-contract.dto */ "../shared/src/dto/organization/contracts/create-contract.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./contract.node */ "../shared/src/dto/organization/contracts/contract.node.ts"), exports);
__exportStar(__webpack_require__(/*! ./contract.view-row */ "../shared/src/dto/organization/contracts/contract.view-row.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/organization/contracts/update-contract.dto.ts":
/*!***********************************************************************!*\
  !*** ../shared/src/dto/organization/contracts/update-contract.dto.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateContractDto = void 0;
class UpdateContractDto {
}
exports.UpdateContractDto = UpdateContractDto;


/***/ }),

/***/ "../shared/src/dto/organization/financialsources/create-financialsource.dto.ts":
/*!*************************************************************************************!*\
  !*** ../shared/src/dto/organization/financialsources/create-financialsource.dto.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFinancialSourceDto = void 0;
class CreateFinancialSourceDto {
}
exports.CreateFinancialSourceDto = CreateFinancialSourceDto;


/***/ }),

/***/ "../shared/src/dto/organization/financialsources/index.ts":
/*!****************************************************************!*\
  !*** ../shared/src/dto/organization/financialsources/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-financialsource.dto */ "../shared/src/dto/organization/financialsources/update-financialsource.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-financialsource.dto */ "../shared/src/dto/organization/financialsources/create-financialsource.dto.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/organization/financialsources/update-financialsource.dto.ts":
/*!*************************************************************************************!*\
  !*** ../shared/src/dto/organization/financialsources/update-financialsource.dto.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateFinancialSourceDto = void 0;
class UpdateFinancialSourceDto {
}
exports.UpdateFinancialSourceDto = UpdateFinancialSourceDto;


/***/ }),

/***/ "../shared/src/dto/organization/index.ts":
/*!***********************************************!*\
  !*** ../shared/src/dto/organization/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./contracts */ "../shared/src/dto/organization/contracts/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./financialsources */ "../shared/src/dto/organization/financialsources/index.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/project-management/index.ts":
/*!*****************************************************!*\
  !*** ../shared/src/dto/project-management/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./project-manager */ "../shared/src/dto/project-management/project-manager/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./workpackage */ "../shared/src/dto/project-management/workpackage/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./planning */ "../shared/src/dto/project-management/planning/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./team */ "../shared/src/dto/project-management/team/index.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/project-management/planning/create-activity.dto.ts":
/*!****************************************************************************!*\
  !*** ../shared/src/dto/project-management/planning/create-activity.dto.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateActivityDto = exports.DeliveryProperties = exports.TaskProperties = void 0;
class TaskProperties {
}
exports.TaskProperties = TaskProperties;
class DeliveryProperties extends TaskProperties {
}
exports.DeliveryProperties = DeliveryProperties;
class CreateActivityDto {
}
exports.CreateActivityDto = CreateActivityDto;


/***/ }),

/***/ "../shared/src/dto/project-management/planning/create-allocation.dto.ts":
/*!******************************************************************************!*\
  !*** ../shared/src/dto/project-management/planning/create-allocation.dto.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAllocationDto = void 0;
class CreateAllocationDto {
}
exports.CreateAllocationDto = CreateAllocationDto;


/***/ }),

/***/ "../shared/src/dto/project-management/planning/create-assignment.dto.ts":
/*!******************************************************************************!*\
  !*** ../shared/src/dto/project-management/planning/create-assignment.dto.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAssignmentDto = void 0;
class CreateAssignmentDto {
}
exports.CreateAssignmentDto = CreateAssignmentDto;


/***/ }),

/***/ "../shared/src/dto/project-management/planning/delete-assignment.dto.ts":
/*!******************************************************************************!*\
  !*** ../shared/src/dto/project-management/planning/delete-assignment.dto.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteAssignmentDto = void 0;
class DeleteAssignmentDto {
}
exports.DeleteAssignmentDto = DeleteAssignmentDto;


/***/ }),

/***/ "../shared/src/dto/project-management/planning/index.ts":
/*!**************************************************************!*\
  !*** ../shared/src/dto/project-management/planning/index.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-allocation.dto */ "../shared/src/dto/project-management/planning/create-allocation.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-assignment.dto */ "../shared/src/dto/project-management/planning/create-assignment.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-activity-color.dto */ "../shared/src/dto/project-management/planning/update-activity-color.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-activity-name.dto */ "../shared/src/dto/project-management/planning/update-activity-name.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-allocation.dto */ "../shared/src/dto/project-management/planning/update-allocation.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-period.dto */ "../shared/src/dto/project-management/planning/update-period.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-activity.dto */ "../shared/src/dto/project-management/planning/create-activity.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-assignment.dto */ "../shared/src/dto/project-management/planning/delete-assignment.dto.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/project-management/planning/update-activity-color.dto.ts":
/*!**********************************************************************************!*\
  !*** ../shared/src/dto/project-management/planning/update-activity-color.dto.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateActivityColorDto = void 0;
class UpdateActivityColorDto {
}
exports.UpdateActivityColorDto = UpdateActivityColorDto;


/***/ }),

/***/ "../shared/src/dto/project-management/planning/update-activity-name.dto.ts":
/*!*********************************************************************************!*\
  !*** ../shared/src/dto/project-management/planning/update-activity-name.dto.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateActivityNameDto = void 0;
class UpdateActivityNameDto {
}
exports.UpdateActivityNameDto = UpdateActivityNameDto;


/***/ }),

/***/ "../shared/src/dto/project-management/planning/update-allocation.dto.ts":
/*!******************************************************************************!*\
  !*** ../shared/src/dto/project-management/planning/update-allocation.dto.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAllocationDto = void 0;
class UpdateAllocationDto {
}
exports.UpdateAllocationDto = UpdateAllocationDto;


/***/ }),

/***/ "../shared/src/dto/project-management/planning/update-period.dto.ts":
/*!**************************************************************************!*\
  !*** ../shared/src/dto/project-management/planning/update-period.dto.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PeriodUpdatedResult = exports.UpdatePeriodDto = void 0;
class UpdatePeriodDto {
    constructor(activityId, startDate, endDate) {
        this.activityId = activityId;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
exports.UpdatePeriodDto = UpdatePeriodDto;
class PeriodUpdatedResult {
}
exports.PeriodUpdatedResult = PeriodUpdatedResult;


/***/ }),

/***/ "../shared/src/dto/project-management/project-manager/assign-project-manager.dto.ts":
/*!******************************************************************************************!*\
  !*** ../shared/src/dto/project-management/project-manager/assign-project-manager.dto.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssignProjectManagerDto = void 0;
class AssignProjectManagerDto {
}
exports.AssignProjectManagerDto = AssignProjectManagerDto;


/***/ }),

/***/ "../shared/src/dto/project-management/project-manager/create-project-manager.dto.ts":
/*!******************************************************************************************!*\
  !*** ../shared/src/dto/project-management/project-manager/create-project-manager.dto.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProjectManagerDto = void 0;
class CreateProjectManagerDto {
}
exports.CreateProjectManagerDto = CreateProjectManagerDto;


/***/ }),

/***/ "../shared/src/dto/project-management/project-manager/index.ts":
/*!*********************************************************************!*\
  !*** ../shared/src/dto/project-management/project-manager/index.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-project-manager.dto */ "../shared/src/dto/project-management/project-manager/create-project-manager.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-project-manager.dto */ "../shared/src/dto/project-management/project-manager/update-project-manager.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./assign-project-manager.dto */ "../shared/src/dto/project-management/project-manager/assign-project-manager.dto.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/project-management/project-manager/update-project-manager.dto.ts":
/*!******************************************************************************************!*\
  !*** ../shared/src/dto/project-management/project-manager/update-project-manager.dto.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProjectManagerDto = void 0;
const create_project_manager_dto_1 = __webpack_require__(/*! ./create-project-manager.dto */ "../shared/src/dto/project-management/project-manager/create-project-manager.dto.ts");
class UpdateProjectManagerDto extends create_project_manager_dto_1.CreateProjectManagerDto {
}
exports.UpdateProjectManagerDto = UpdateProjectManagerDto;


/***/ }),

/***/ "../shared/src/dto/project-management/team/add-team-member.dto.ts":
/*!************************************************************************!*\
  !*** ../shared/src/dto/project-management/team/add-team-member.dto.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddTeamMemberDto = void 0;
class AddTeamMemberDto {
}
exports.AddTeamMemberDto = AddTeamMemberDto;


/***/ }),

/***/ "../shared/src/dto/project-management/team/index.ts":
/*!**********************************************************!*\
  !*** ../shared/src/dto/project-management/team/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./remove-team-member.dto */ "../shared/src/dto/project-management/team/remove-team-member.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./add-team-member.dto */ "../shared/src/dto/project-management/team/add-team-member.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./swap-team-member.dto */ "../shared/src/dto/project-management/team/swap-team-member.dto.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/project-management/team/remove-team-member.dto.ts":
/*!***************************************************************************!*\
  !*** ../shared/src/dto/project-management/team/remove-team-member.dto.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveTeamMemberDto = void 0;
const add_team_member_dto_1 = __webpack_require__(/*! ./add-team-member.dto */ "../shared/src/dto/project-management/team/add-team-member.dto.ts");
class RemoveTeamMemberDto extends add_team_member_dto_1.AddTeamMemberDto {
}
exports.RemoveTeamMemberDto = RemoveTeamMemberDto;


/***/ }),

/***/ "../shared/src/dto/project-management/team/swap-team-member.dto.ts":
/*!*************************************************************************!*\
  !*** ../shared/src/dto/project-management/team/swap-team-member.dto.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwapTeamMemberDto = void 0;
class SwapTeamMemberDto {
}
exports.SwapTeamMemberDto = SwapTeamMemberDto;


/***/ }),

/***/ "../shared/src/dto/project-management/workpackage/create-workpackage.dto.ts":
/*!**********************************************************************************!*\
  !*** ../shared/src/dto/project-management/workpackage/create-workpackage.dto.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateWorkpackageDto = void 0;
class CreateWorkpackageDto {
}
exports.CreateWorkpackageDto = CreateWorkpackageDto;


/***/ }),

/***/ "../shared/src/dto/project-management/workpackage/index.ts":
/*!*****************************************************************!*\
  !*** ../shared/src/dto/project-management/workpackage/index.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-booking-stage.dto */ "../shared/src/dto/project-management/workpackage/update-booking-stage.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-stage.dto */ "../shared/src/dto/project-management/workpackage/update-stage.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-workpackage.dto */ "../shared/src/dto/project-management/workpackage/update-workpackage.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-workpackage.dto */ "../shared/src/dto/project-management/workpackage/create-workpackage.dto.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/project-management/workpackage/update-booking-stage.dto.ts":
/*!************************************************************************************!*\
  !*** ../shared/src/dto/project-management/workpackage/update-booking-stage.dto.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBookingStageDto = void 0;
class UpdateBookingStageDto {
    constructor(workpackageId, bookingStage) {
        this.workpackageId = workpackageId;
        this.bookingStage = bookingStage;
    }
}
exports.UpdateBookingStageDto = UpdateBookingStageDto;


/***/ }),

/***/ "../shared/src/dto/project-management/workpackage/update-stage.dto.ts":
/*!****************************************************************************!*\
  !*** ../shared/src/dto/project-management/workpackage/update-stage.dto.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateStageDto = void 0;
class UpdateStageDto {
}
exports.UpdateStageDto = UpdateStageDto;


/***/ }),

/***/ "../shared/src/dto/project-management/workpackage/update-workpackage.dto.ts":
/*!**********************************************************************************!*\
  !*** ../shared/src/dto/project-management/workpackage/update-workpackage.dto.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateWorkpackageDto = void 0;
class UpdateWorkpackageDto {
}
exports.UpdateWorkpackageDto = UpdateWorkpackageDto;


/***/ }),

/***/ "../shared/src/dto/resource-management/agents/create-agent.dto.ts":
/*!************************************************************************!*\
  !*** ../shared/src/dto/resource-management/agents/create-agent.dto.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAgentDto = void 0;
class CreateAgentDto {
}
exports.CreateAgentDto = CreateAgentDto;


/***/ }),

/***/ "../shared/src/dto/resource-management/agents/index.ts":
/*!*************************************************************!*\
  !*** ../shared/src/dto/resource-management/agents/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-agent.dto */ "../shared/src/dto/resource-management/agents/create-agent.dto.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/resource-management/index.ts":
/*!******************************************************!*\
  !*** ../shared/src/dto/resource-management/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resources */ "../shared/src/dto/resource-management/resources/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetypes */ "../shared/src/dto/resource-management/resourcetypes/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./agents */ "../shared/src/dto/resource-management/agents/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./resource-schedule */ "../shared/src/dto/resource-management/resource-schedule/index.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/resource-management/resource-schedule/index.ts":
/*!************************************************************************!*\
  !*** ../shared/src/dto/resource-management/resource-schedule/index.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./resource-capacity-instructions.dto */ "../shared/src/dto/resource-management/resource-schedule/resource-capacity-instructions.dto.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/resource-management/resource-schedule/resource-capacity-instructions.dto.ts":
/*!*****************************************************************************************************!*\
  !*** ../shared/src/dto/resource-management/resource-schedule/resource-capacity-instructions.dto.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceCapacityInstructionsDto = void 0;
class ResourceCapacityInstructionsDto {
}
exports.ResourceCapacityInstructionsDto = ResourceCapacityInstructionsDto;


/***/ }),

/***/ "../shared/src/dto/resource-management/resources/create-resource.dto.ts":
/*!******************************************************************************!*\
  !*** ../shared/src/dto/resource-management/resources/create-resource.dto.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateResourceDto = void 0;
class CreateResourceDto {
}
exports.CreateResourceDto = CreateResourceDto;


/***/ }),

/***/ "../shared/src/dto/resource-management/resources/index.ts":
/*!****************************************************************!*\
  !*** ../shared/src/dto/resource-management/resources/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-resource.dto */ "../shared/src/dto/resource-management/resources/create-resource.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-resource.dto */ "../shared/src/dto/resource-management/resources/update-resource.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./resource.node */ "../shared/src/dto/resource-management/resources/resource.node.ts"), exports);
__exportStar(__webpack_require__(/*! ./resource.view-row */ "../shared/src/dto/resource-management/resources/resource.view-row.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/resource-management/resources/resource.node.ts":
/*!************************************************************************!*\
  !*** ../shared/src/dto/resource-management/resources/resource.node.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceNode = void 0;
class ResourceNode {
}
exports.ResourceNode = ResourceNode;


/***/ }),

/***/ "../shared/src/dto/resource-management/resources/resource.view-row.ts":
/*!****************************************************************************!*\
  !*** ../shared/src/dto/resource-management/resources/resource.view-row.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceViewRow = void 0;
class ResourceViewRow {
}
exports.ResourceViewRow = ResourceViewRow;


/***/ }),

/***/ "../shared/src/dto/resource-management/resources/update-resource.dto.ts":
/*!******************************************************************************!*\
  !*** ../shared/src/dto/resource-management/resources/update-resource.dto.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateResourceDto = void 0;
class UpdateResourceDto {
}
exports.UpdateResourceDto = UpdateResourceDto;


/***/ }),

/***/ "../shared/src/dto/resource-management/resourcetypes/create-resourcetype.dto.ts":
/*!**************************************************************************************!*\
  !*** ../shared/src/dto/resource-management/resourcetypes/create-resourcetype.dto.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateResourceTypeDto = void 0;
class CreateResourceTypeDto {
}
exports.CreateResourceTypeDto = CreateResourceTypeDto;


/***/ }),

/***/ "../shared/src/dto/resource-management/resourcetypes/index.ts":
/*!********************************************************************!*\
  !*** ../shared/src/dto/resource-management/resourcetypes/index.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-resourcetype.dto */ "../shared/src/dto/resource-management/resourcetypes/update-resourcetype.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-resourcetype.dto */ "../shared/src/dto/resource-management/resourcetypes/create-resourcetype.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetype.node */ "../shared/src/dto/resource-management/resourcetypes/resourcetype.node.ts"), exports);
__exportStar(__webpack_require__(/*! ./resourcetype.view-row */ "../shared/src/dto/resource-management/resourcetypes/resourcetype.view-row.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/resource-management/resourcetypes/resourcetype.node.ts":
/*!********************************************************************************!*\
  !*** ../shared/src/dto/resource-management/resourcetypes/resourcetype.node.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypeNode = void 0;
class ResourceTypeNode {
}
exports.ResourceTypeNode = ResourceTypeNode;


/***/ }),

/***/ "../shared/src/dto/resource-management/resourcetypes/resourcetype.view-row.ts":
/*!************************************************************************************!*\
  !*** ../shared/src/dto/resource-management/resourcetypes/resourcetype.view-row.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceTypeViewRow = void 0;
class ResourceTypeViewRow {
}
exports.ResourceTypeViewRow = ResourceTypeViewRow;


/***/ }),

/***/ "../shared/src/dto/resource-management/resourcetypes/update-resourcetype.dto.ts":
/*!**************************************************************************************!*\
  !*** ../shared/src/dto/resource-management/resourcetypes/update-resourcetype.dto.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateResourceTypeDto = void 0;
class UpdateResourceTypeDto {
}
exports.UpdateResourceTypeDto = UpdateResourceTypeDto;


/***/ }),

/***/ "../shared/src/dto/scheduling/calendar/calendar.node.ts":
/*!**************************************************************!*\
  !*** ../shared/src/dto/scheduling/calendar/calendar.node.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalendarNode = void 0;
class CalendarNode {
}
exports.CalendarNode = CalendarNode;


/***/ }),

/***/ "../shared/src/dto/scheduling/calendar/index.ts":
/*!******************************************************!*\
  !*** ../shared/src/dto/scheduling/calendar/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./calendar.node */ "../shared/src/dto/scheduling/calendar/calendar.node.ts"), exports);


/***/ }),

/***/ "../shared/src/dto/scheduling/index.ts":
/*!*********************************************!*\
  !*** ../shared/src/dto/scheduling/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./calendar */ "../shared/src/dto/scheduling/calendar/index.ts"), exports);


/***/ }),

/***/ "../shared/src/form.ts":
/*!*****************************!*\
  !*** ../shared/src/form.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormErrorResponse = exports.FormSuccessResponse = void 0;
class FormSuccessResponse {
    constructor({ id, message }) {
        this.status = 'ok';
        this.id = id ?? '';
        this.message = message;
    }
}
exports.FormSuccessResponse = FormSuccessResponse;
class FormErrorResponse {
    constructor({ message, validation, }) {
        this.status = 'error';
        this.message = message;
        this.validation = validation ?? {};
    }
}
exports.FormErrorResponse = FormErrorResponse;


/***/ }),

/***/ "../shared/src/index.ts":
/*!******************************!*\
  !*** ../shared/src/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./dto */ "../shared/src/dto/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./form */ "../shared/src/form.ts"), exports);
__exportStar(__webpack_require__(/*! ./types */ "../shared/src/types/index.ts"), exports);


/***/ }),

/***/ "../shared/src/types/index.ts":
/*!************************************!*\
  !*** ../shared/src/types/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./option */ "../shared/src/types/option.ts"), exports);


/***/ }),

/***/ "../shared/src/types/option.ts":
/*!*************************************!*\
  !*** ../shared/src/types/option.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/cqrs":
/*!*******************************!*\
  !*** external "@nestjs/cqrs" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/cqrs");

/***/ }),

/***/ "@nestjs/event-emitter":
/*!****************************************!*\
  !*** external "@nestjs/event-emitter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/event-emitter");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/***/ ((module) => {

module.exports = require("luxon");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "neo4j-driver":
/*!*******************************!*\
  !*** external "neo4j-driver" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("neo4j-driver");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(5001);
}
bootstrap();

})();

/******/ })()
;