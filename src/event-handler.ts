import {EventTypes} from "./conts/event-types.ts";

const addDataLayer = () =>
    window.dispatchEvent(new CustomEvent(EventTypes.Add_Data_Layer))
const addMapLayer = (data:any) =>
    window.dispatchEvent(new CustomEvent<any>(EventTypes.Add_Map_Layer,{detail:data}))

const createMap = (parent:HTMLDivElement)=>{
    window.dispatchEvent(new CustomEvent<HTMLDivElement>(EventTypes.Create_Map,{detail: parent}))
}
export default {addDataLayer,addMapLayer,createMap}
