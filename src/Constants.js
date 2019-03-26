export const DB = "OBJECTS";

export const OBJECT_SCHEMA = {
    name:{
        type:"string",
        displayName:"Name"
    },
    created_by: {
        type: "string",
        displayName: "Created By",
        description: "Original author of the object",
        readOnly: true
    },
    created_date:{
        type:"date",
        displayName:"Created Date",
        readOnly: true
    },
    modified_by:{
        type:"string",
        displayName:"Modified By",
        description:"Author of the last change",
        readOnly: true
    },
    modified_date:{
        type:"date",
        displayName:"Modified Date",
        readOnly: true
    }
};