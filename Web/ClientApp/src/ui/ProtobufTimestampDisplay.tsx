import {google} from "../state/grpc";

 function ProtobufTimestampDisplay({timestamp}: {timestamp: google.protobuf.ITimestamp}){
    // @ts-ignore
     return <span>{timestamp.seconds ? new Date(timestamp.seconds * 1000).toDateString() : null}</span>
}

export default ProtobufTimestampDisplay;