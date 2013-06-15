define({ api: [
  {
    "type": "post",
    "url": "/sign_in",
    "title": "Sign In",
    "name": "SignIn",
    "group": "Authentication",
    "permission": "public",
    "version": "1.0.0",
    "description": "On success, generated security tokens are returned",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "user_id",
            "optional": false,
            "description": "User ID"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Authtentication Token"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "remember_token",
            "optional": false,
            "description": "Remember Token"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"userid\": \"1\",\n \"auth_token\": \"SomeLongRandomString\"\n \"remember_token\": \"AnotherLongRandomString\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n"
        }
      ]
    },
    "filename": "app/auth.js"
  },
  {
    "type": "delete",
    "url": "/sign_out",
    "title": "Sign Out",
    "name": "SignOut",
    "group": "Authentication",
    "permission": "public",
    "version": "1.0.0",
    "description": "Signs the user out.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user_id",
            "optional": false,
            "description": "User ID"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Authtentication token"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "user_id",
            "optional": false,
            "description": "User id"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"hospital\": {\n   \"user_id\": \"1\"\n }\n}\n"
        }
      ]
    },
    "filename": "app/auth.js"
  },
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
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "Hospital ID"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "Hospital ID"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "Hospital name"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"hospital\": {\n       \"id\": \"1\",\n       \"name\": \"AKH Wien\"\n     }\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "RecordNotFound",
            "optional": false,
            "description": "The <code>id</code> of the Hospital was not found."
          }
        ]
      },
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "Hospital ID"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "Hospital name"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"hospitals\": [{\n       \"id\": \"1\",\n       \"name\": \"AKH Wien\"\n     },\n     {\n       \"id\": \"2\",\n       \"name\": \"Barmherzige Brüder\"\n     }]\n   }\n"
        }
      ]
    },
    "filename": "app/hospitals.js"
  },
  {
    "type": "get",
    "url": "/hospitals",
    "title": "Get all user notifications",
    "name": "GetNotifications",
    "group": "Notification",
    "permission": "public",
    "version": "1.0.0",
    "description": "Returns all notifications for the current user.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "id",
            "optional": false,
            "description": "Notification ID"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "title",
            "optional": false,
            "description": "Notification title"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "datetime",
            "optional": false,
            "description": "Notification date and time"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"notifications\": [{\n       \"id\": 1,\n       \"name\": \"AKH Wien\"\n     },\n     {\n       \"id\": 2,\n       \"name\": \"Donauspital Krems\"\n     }]\n   }\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 401 Unauthorized\n"
        }
      ]
    },
    "filename": "app/notifications.js"
  },
  {
    "type": "get",
    "url": "/operation_type/:id",
    "title": "Get a specific operation type",
    "name": "GetOperationType",
    "group": "Operation_Type",
    "permission": "public",
    "version": "1.0.0",
    "description": "Returns data for a specific hosptial.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "Operation type ID"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "Operation type ID"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "Operation type name"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"hospital\": {\n       \"id\": \"1\",\n       \"name\": \"Neurochirurgie\"\n     }\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "RecordNotFound",
            "optional": false,
            "description": "The <code>id</code> of the operation type was not found."
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"RecordNotFound\"\n   }\n"
        }
      ]
    },
    "filename": "app/operation_types.js"
  },
  {
    "type": "get",
    "url": "/operation_types",
    "title": "Get all operation types",
    "name": "GetOperationTypes",
    "group": "Operation_Type",
    "permission": "public",
    "version": "1.0.0",
    "description": "Returns all operation types.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "Operation type ID"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "Operation type name"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"hospitals\": [{\n       \"id\": \"1\",\n       \"name\": \"Neurochirurgie\"\n     },\n     {\n       \"id\": \"2\",\n       \"name\": \"HNO\"\n     }]\n   }\n"
        }
      ]
    },
    "filename": "app/operation_types.js"
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
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "TimeSlot ID"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "TimeSlot ID"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "start",
            "optional": false,
            "description": "Slot start Date in ISO-8601 format"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "end",
            "optional": false,
            "description": "Slot end Date in ISO-8601 format"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "hospital_id",
            "optional": false,
            "description": "ID of the associated Hospital"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "operation_type_id",
            "optional": false,
            "description": "ID of the associated OperationType"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "operation_id",
            "optional": false,
            "description": "ID of the associated Operation. If no operation is assigned yet, <code>null</code> is returned."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"time_slot\": {\n       \"id\": \"1\",\n       \"start\": \"2013-05-26 18:00Z\",\n       \"start\": \"2013-05-27 20:00Z\",\n       \"hospital_id\": 2,\n       \"operation_type_id\": 1,\n       \"operation_id\": null\n     }\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "RecordNotFound",
            "optional": false,
            "description": "The <code>id</code> of the TimeSlot was not found or the time slot lies in the past."
          }
        ]
      },
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "TimeSlot ID"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "start",
            "optional": false,
            "description": "Slot start Date in ISO-8601 format"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "end",
            "optional": false,
            "description": "Slot end Date in ISO-8601 format"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "hospital_id",
            "optional": false,
            "description": "ID of the associated Hospital"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "operation_type_id",
            "optional": false,
            "description": "ID of the associated OperationType"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "operation_id",
            "optional": false,
            "description": "ID of the associated Operation. If no operation is assigned yet, <code>null</code> is returned."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"time_slots\": [{\n       \"id\": \"1\",\n       \"start\": \"2013-05-26 18:00Z\",\n       \"start\": \"2013-05-27 20:00Z\",\n       \"hospital_id\": 2,\n       \"operation_type_id\": 1,\n       \"operation_id\": null\n     },\n     {\n       \"id\": \"2\",\n       \"start\": \"2013-05-26 12:00Z\",\n       \"start\": \"2013-05-27 16:00Z\",\n       \"hospital_id\": 1,\n       \"operation_type_id\": 3,\n       \"operation_id\": 1\n     }]\n   }\n"
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "hospital_id",
            "optional": false,
            "description": "The ID of the hospital"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "operation_type_id",
            "optional": false,
            "description": "The ID of the operation type"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "field": "start",
            "optional": false,
            "description": "The begin date of the slot"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "field": "end",
            "optional": false,
            "description": "The end date of the slot"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "TimeSlot ID"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "start",
            "optional": false,
            "description": "Slot start Date in ISO-8601 format"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "end",
            "optional": false,
            "description": "Slot end Date in ISO-8601 format"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "hospital_id",
            "optional": false,
            "description": "ID of the associated Hospital"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "operation_type_id",
            "optional": false,
            "description": "ID of the associated OperationType"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "operation_id",
            "optional": false,
            "description": "ID of the associated Operation. If no operation is assigned yet, <code>null</code> is returned."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   { \"time_slot\": {\n       \"id\": \"1\",\n       \"start\": \"2013-05-26 18:00Z\",\n       \"start\": \"2013-05-27 20:00Z\",\n       \"hospital_id\": 2,\n       \"operation_type_id\": 1,\n       \"operation_id\": null\n     }\n   }\n"
        }
      ]
    },
    "filename": "app/time_slots.js"
  }
] });