import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class BoolStrainCondition extends jspb.Message {
  getOperator(): BoolOperator;
  setOperator(value: BoolOperator): BoolStrainCondition;

  getConditionsList(): Array<StrainCondition>;
  setConditionsList(value: Array<StrainCondition>): BoolStrainCondition;
  clearConditionsList(): BoolStrainCondition;
  addConditions(value?: StrainCondition, index?: number): StrainCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolStrainCondition.AsObject;
  static toObject(includeInstance: boolean, msg: BoolStrainCondition): BoolStrainCondition.AsObject;
  static serializeBinaryToWriter(message: BoolStrainCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolStrainCondition;
  static deserializeBinaryFromReader(message: BoolStrainCondition, reader: jspb.BinaryReader): BoolStrainCondition;
}

export namespace BoolStrainCondition {
  export type AsObject = {
    operator: BoolOperator,
    conditionsList: Array<StrainCondition.AsObject>,
  }
}

export class StrainCondition extends jspb.Message {
  getNegate(): boolean;
  setNegate(value: boolean): StrainCondition;

  getAccession(): AccessionCondition | undefined;
  setAccession(value?: AccessionCondition): StrainCondition;
  hasAccession(): boolean;
  clearAccession(): StrainCondition;

  getBiosample(): BiosampleCondition | undefined;
  setBiosample(value?: BiosampleCondition): StrainCondition;
  hasBiosample(): boolean;
  clearBiosample(): StrainCondition;

  getCountry(): CountryCondition | undefined;
  setCountry(value?: CountryCondition): StrainCondition;
  hasCountry(): boolean;
  clearCountry(): StrainCondition;

  getDate(): DateCondition | undefined;
  setDate(value?: DateCondition): StrainCondition;
  hasDate(): boolean;
  clearDate(): StrainCondition;

  getGene(): GeneStrainCondition | undefined;
  setGene(value?: GeneStrainCondition): StrainCondition;
  hasGene(): boolean;
  clearGene(): StrainCondition;

  getLineage(): LineageStrainCondition | undefined;
  setLineage(value?: LineageStrainCondition): StrainCondition;
  hasLineage(): boolean;
  clearLineage(): StrainCondition;

  getBool(): BoolStrainCondition | undefined;
  setBool(value?: BoolStrainCondition): StrainCondition;
  hasBool(): boolean;
  clearBool(): StrainCondition;

  getConditionCase(): StrainCondition.ConditionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StrainCondition.AsObject;
  static toObject(includeInstance: boolean, msg: StrainCondition): StrainCondition.AsObject;
  static serializeBinaryToWriter(message: StrainCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StrainCondition;
  static deserializeBinaryFromReader(message: StrainCondition, reader: jspb.BinaryReader): StrainCondition;
}

export namespace StrainCondition {
  export type AsObject = {
    negate: boolean,
    accession?: AccessionCondition.AsObject,
    biosample?: BiosampleCondition.AsObject,
    country?: CountryCondition.AsObject,
    date?: DateCondition.AsObject,
    gene?: GeneStrainCondition.AsObject,
    lineage?: LineageStrainCondition.AsObject,
    bool?: BoolStrainCondition.AsObject,
  }

  export enum ConditionCase { 
    CONDITION_NOT_SET = 0,
    ACCESSION = 2,
    BIOSAMPLE = 3,
    COUNTRY = 4,
    DATE = 5,
    GENE = 6,
    LINEAGE = 7,
    BOOL = 8,
  }
}

export class DateCondition extends jspb.Message {
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): DateCondition;
  hasFrom(): boolean;
  clearFrom(): DateCondition;

  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): DateCondition;
  hasTo(): boolean;
  clearTo(): DateCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DateCondition): DateCondition.AsObject;
  static serializeBinaryToWriter(message: DateCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateCondition;
  static deserializeBinaryFromReader(message: DateCondition, reader: jspb.BinaryReader): DateCondition;
}

export namespace DateCondition {
  export type AsObject = {
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CountryCondition extends jspb.Message {
  getIsoCodeList(): Array<string>;
  setIsoCodeList(value: Array<string>): CountryCondition;
  clearIsoCodeList(): CountryCondition;
  addIsoCode(value: string, index?: number): CountryCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryCondition.AsObject;
  static toObject(includeInstance: boolean, msg: CountryCondition): CountryCondition.AsObject;
  static serializeBinaryToWriter(message: CountryCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryCondition;
  static deserializeBinaryFromReader(message: CountryCondition, reader: jspb.BinaryReader): CountryCondition;
}

export namespace CountryCondition {
  export type AsObject = {
    isoCodeList: Array<string>,
  }
}

export class AccessionCondition extends jspb.Message {
  getAccessionNumberList(): Array<string>;
  setAccessionNumberList(value: Array<string>): AccessionCondition;
  clearAccessionNumberList(): AccessionCondition;
  addAccessionNumber(value: string, index?: number): AccessionCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessionCondition.AsObject;
  static toObject(includeInstance: boolean, msg: AccessionCondition): AccessionCondition.AsObject;
  static serializeBinaryToWriter(message: AccessionCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessionCondition;
  static deserializeBinaryFromReader(message: AccessionCondition, reader: jspb.BinaryReader): AccessionCondition;
}

export namespace AccessionCondition {
  export type AsObject = {
    accessionNumberList: Array<string>,
  }
}

export class BiosampleCondition extends jspb.Message {
  getAccessionNumberList(): Array<string>;
  setAccessionNumberList(value: Array<string>): BiosampleCondition;
  clearAccessionNumberList(): BiosampleCondition;
  addAccessionNumber(value: string, index?: number): BiosampleCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiosampleCondition.AsObject;
  static toObject(includeInstance: boolean, msg: BiosampleCondition): BiosampleCondition.AsObject;
  static serializeBinaryToWriter(message: BiosampleCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiosampleCondition;
  static deserializeBinaryFromReader(message: BiosampleCondition, reader: jspb.BinaryReader): BiosampleCondition;
}

export namespace BiosampleCondition {
  export type AsObject = {
    accessionNumberList: Array<string>,
  }
}

export class GeneStrainCondition extends jspb.Message {
  getAccessionNumberList(): Array<string>;
  setAccessionNumberList(value: Array<string>): GeneStrainCondition;
  clearAccessionNumberList(): GeneStrainCondition;
  addAccessionNumber(value: string, index?: number): GeneStrainCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneStrainCondition.AsObject;
  static toObject(includeInstance: boolean, msg: GeneStrainCondition): GeneStrainCondition.AsObject;
  static serializeBinaryToWriter(message: GeneStrainCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneStrainCondition;
  static deserializeBinaryFromReader(message: GeneStrainCondition, reader: jspb.BinaryReader): GeneStrainCondition;
}

export namespace GeneStrainCondition {
  export type AsObject = {
    accessionNumberList: Array<string>,
  }
}

export class LineageStrainCondition extends jspb.Message {
  getClassificationname(): string;
  setClassificationname(value: string): LineageStrainCondition;

  getName(): string;
  setName(value: string): LineageStrainCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LineageStrainCondition.AsObject;
  static toObject(includeInstance: boolean, msg: LineageStrainCondition): LineageStrainCondition.AsObject;
  static serializeBinaryToWriter(message: LineageStrainCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LineageStrainCondition;
  static deserializeBinaryFromReader(message: LineageStrainCondition, reader: jspb.BinaryReader): LineageStrainCondition;
}

export namespace LineageStrainCondition {
  export type AsObject = {
    classificationname: string,
    name: string,
  }
}

export enum BoolOperator { 
  OR = 0,
  AND = 1,
}
