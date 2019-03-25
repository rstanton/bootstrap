export const DB = "OBJECTS";

export const OBJECT_SCHEMA = {
    id: {
        type: "string",
        displayName: "ID"
    },
    name:{
        type:"string",
        displayName:"Name"
    },
    created_by: {
        type: "string",
        displayName: "Created By",
        description: "Original author of the object"
    },
    created_date:{
        type:"date",
        displayName:"Created Date"
    },
    modified_by:{
        type:"string",
        displayName:"Modified By",
        description:"Author of the last change"
    },
    modifed_date:{
        type:"date",
        displayName:"Modified Date"
    }
};