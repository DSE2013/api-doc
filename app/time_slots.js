/**
 * @api 						{get} /time_slots Get all TimeSlots
 * @apiName 				GetTimeSlots
 * @apiGroup 				TimeSlot
 * @apiPermission 	public
 * @apiVersion 			1.0.0
 *
 * @apiDescription 	Returns all time slots, which are planned for the future.
 *
 * @apiSuccess {String}       id                  TimeSlot ID
 * @apiSuccess {Date}         start               Slot start Date in ISO-8601 format
 * @apiSuccess {Date}         end                 Slot end Date in ISO-8601 format
 * @apiSuccess {Integer}      hospital_id         ID of the associated Hospital
 * @apiSuccess {Integer}      operation_type_id   ID of the associated OperationType
 * @apiSuccess {Integer}      operation_id        ID of the associated Operation. If no operation is assigned yet, <code>null</code> is returned.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { "time_slots": [{
 *         "id": "1",
 *         "start": "2013-05-26 18:00Z",
 *         "start": "2013-05-27 20:00Z",
 *         "hospital_id": 2,
 *         "operation_type_id": 1,
 *         "operation_id": null
 *       },
 *       {
 *         "id": "2",
 *         "start": "2013-05-26 12:00Z",
 *         "start": "2013-05-27 16:00Z",
 *         "hospital_id": 1,
 *         "operation_type_id": 3,
 *         "operation_id": 1
 *       }]
 *     }
 */

 /**
 * @api {get} /time_slots/:id Get a specific TimeSlot
 * @apiName GetTimeSlot
 * @apiGroup TimeSlot
 * @apiPermission public
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns data for a time slot in the future.
 *
 * @apiParam    {String}      id                  TimeSlot ID
 *
 * @apiSuccess  {String}      id                  TimeSlot ID
 * @apiSuccess  {Date}        start               Slot start Date in ISO-8601 format
 * @apiSuccess  {Date}        end                 Slot end Date in ISO-8601 format
 * @apiSuccess  {Integer}     hospital_id         ID of the associated Hospital
 * @apiSuccess  {Integer}     operation_type_id   ID of the associated OperationType
 * @apiSuccess  {Integer}     operation_id        ID of the associated Operation. If no operation is assigned yet, <code>null</code> is returned.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { "time_slot": {
 *         "id": "1",
 *         "start": "2013-05-26 18:00Z",
 *         "start": "2013-05-27 20:00Z",
 *         "hospital_id": 2,
 *         "operation_type_id": 1,
 *         "operation_id": null
 *       }
 *     }
 *
 * @apiError RecordNotFound   The <code>id</code> of the TimeSlot was not found or the time slot lies in the past.
 *
 * @apiErrorExample Error Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "RecordNotFound"
 *     }
 */

/**
 * @api {post} /time_slots Create a TimeSlot
 * @apiName PostTimeSlot
 * @apiGroup TimeSlot
 * @apiPermission hospital
 * @apiVersion 1.0.0
 *
 * @apiParam {String}	hospital_id					The ID of the hospital
 * @apiParam {String}	operation_type_id		The ID of the operation type
 * @apiParam {Date}		start								The begin date of the slot
 * @apiParam {Date}		end									The end date of the slot
 *
 * @apiSuccess  {String}      id                  TimeSlot ID
 * @apiSuccess  {Date}        start               Slot start Date in ISO-8601 format
 * @apiSuccess  {Date}        end                 Slot end Date in ISO-8601 format
 * @apiSuccess  {Integer}     hospital_id         ID of the associated Hospital
 * @apiSuccess  {Integer}     operation_type_id   ID of the associated OperationType
 * @apiSuccess  {Integer}     operation_id        ID of the associated Operation. If no operation is assigned yet, <code>null</code> is returned.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { "time_slot": {
 *         "id": "1",
 *         "start": "2013-05-26 18:00Z",
 *         "start": "2013-05-27 20:00Z",
 *         "hospital_id": 2,
 *         "operation_type_id": 1,
 *         "operation_id": null
 *       }
 *     }
 */