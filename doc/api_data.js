define({ api: [
  {
    "type": "get",
    "url": "/hospital/:id",
    "title": "Get a specific Hospital",
    "name": "GetHospital",
    "group": "Hospital",
    "permission": "public",
    "version": "1.0.0",
    "description": "Returns data for a specific hosptial.",
    "parameter": {
      "fields": [
        {
          "type": "Integer",
          "field": "id",
          "optional": false,
          "description": "Hospital ID"
        }
      ]
    },
    "success": {
      "fields": [
        {
          "type": "Integer",
          "field": "id",
          "optional": false,
          "description": "Hospital ID"
        },
        {
          "type": "String",
          "field": "name",
          "optional": false,
          "description": "Hospital name"
        },
        {
          "type": "Array",
          "field": "time_slot_ids",
          "optional": false,
          "description": "Array of TimeSlots in the future, associated with this hospital"
        }
      ],
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"hospital\": {\n       \"id\": 1,\n       \"name\": \"AKH Wien\",\n       \"time_slot_ids\": [1, 2, 3]\n     }\n   }\n"
        }
      ]
    },
    "error": {
      "fields": [
        {
          "field": "RecordNotFound",
          "optional": false,
          "description": "The <code>id</code> of the Hospital was not found."
        }
      ],
      "examples": [
        {
          "title": "Error Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"RecordNotFound\"\n   }\n"
        }
      ]
    },
    "filename": "app/hospitals.js"
  },
  {
    "type": "get",
    "url": "/hospitals",
    "title": "Get all Hospitals",
    "name": "GetHospitals",
    "group": "Hospital",
    "permission": "public",
    "version": "1.0.0",
    "description": "Returns all hospitals.",
    "success": {
      "fields": [
        {
          "type": "Integer",
          "field": "id",
          "optional": false,
          "description": "Hospital ID"
        },
        {
          "type": "String",
          "field": "name",
          "optional": false,
          "description": "Hospital name"
        }
      ],
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"hospitals\": [{\n       \"id\": 1,\n       \"name\": \"AKH Wien\"\n     },\n     {\n       \"id\": 2,\n       \"name\": \"Donauspital Krems\"\n     }]\n   }\n"
        }
      ]
    },
    "filename": "app/hospitals.js"
  },
  {
    "type": "get",
    "url": "/time_slots/:id",
    "title": "Get a specific TimeSlot",
    "name": "GetTimeSlot",
    "group": "TimeSlot",
    "permission": "public",
    "version": "1.0.0",
    "description": "Returns data for a time slot in the future.",
    "parameter": {
      "fields": [
        {
          "type": "Integer",
          "field": "id",
          "optional": false,
          "description": "TimeSlot ID"
        }
      ]
    },
    "success": {
      "fields": [
        {
          "type": "Integer",
          "field": "id",
          "optional": false,
          "description": "TimeSlot ID"
        },
        {
          "type": "Date",
          "field": "start",
          "optional": false,
          "description": "Slot start Date in ISO-8601 format"
        },
        {
          "type": "Date",
          "field": "end",
          "optional": false,
          "description": "Slot end Date in ISO-8601 format"
        },
        {
          "type": "Integer",
          "field": "hospital_id",
          "optional": false,
          "description": "ID of the associated Hospital"
        },
        {
          "type": "Integer",
          "field": "operation_type_id",
          "optional": false,
          "description": "ID of the associated OperationType"
        },
        {
          "type": "Integer",
          "field": "operation_id",
          "optional": false,
          "description": "ID of the associated Operation. If no operation is assigned yet, <code>null</code> is returned."
        }
      ],
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"time_slot\": {\n       \"id\": 1,\n       \"start\": \"2013-05-26 18:00Z\",\n       \"start\": \"2013-05-27 20:00Z\",\n       \"hospital_id\": 2,\n       \"operation_type_id\": 1,\n       \"operation_id\": null\n     }\n   }\n"
        }
      ]
    },
    "error": {
      "fields": [
        {
          "field": "RecordNotFound",
          "optional": false,
          "description": "The <code>id</code> of the TimeSlot was not found or the time slot lies in the past."
        }
      ],
      "examples": [
        {
          "title": "Error Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"RecordNotFound\"\n   }\n"
        }
      ]
    },
    "filename": "app/time_slots.js"
  },
  {
    "type": "get",
    "url": "/time_slots",
    "title": "Get all TimeSlots",
    "name": "GetTimeSlots",
    "group": "TimeSlot",
    "permission": "public",
    "version": "1.0.0",
    "description": "Returns all time slots, which are planned for the future.",
    "success": {
      "fields": [
        {
          "type": "Integer",
          "field": "id",
          "optional": false,
          "description": "TimeSlot ID"
        },
        {
          "type": "Date",
          "field": "start",
          "optional": false,
          "description": "Slot start Date in ISO-8601 format"
        },
        {
          "type": "Date",
          "field": "end",
          "optional": false,
          "description": "Slot end Date in ISO-8601 format"
        },
        {
          "type": "Integer",
          "field": "hospital_id",
          "optional": false,
          "description": "ID of the associated Hospital"
        },
        {
          "type": "Integer",
          "field": "operation_type_id",
          "optional": false,
          "description": "ID of the associated OperationType"
        },
        {
          "type": "Integer",
          "field": "operation_id",
          "optional": false,
          "description": "ID of the associated Operation. If no operation is assigned yet, <code>null</code> is returned."
        }
      ],
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"time_slots\": [{\n       \"id\": 1,\n       \"start\": \"2013-05-26 18:00Z\",\n       \"start\": \"2013-05-27 20:00Z\",\n       \"hospital_id\": 2,\n       \"operation_type_id\": 1,\n       \"operation_id\": null\n     },\n     {\n       \"id\": 2,\n       \"start\": \"2013-05-26 12:00Z\",\n       \"start\": \"2013-05-27 16:00Z\",\n       \"hospital_id\": 1,\n       \"operation_type_id\": 3,\n       \"operation_id\": 1\n     }]\n   }\n"
        }
      ]
    },
    "filename": "app/time_slots.js"
  },
  {
    "type": "post",
    "url": "/time_slots",
    "title": "Create a TimeSlot",
    "name": "PostTimeSlot",
    "group": "TimeSlot",
    "permission": "hospital",
    "version": "1.0.0",
    "filename": "app/time_slots.js"
  }
] });