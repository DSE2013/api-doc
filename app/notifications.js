/**
 * @api {get} /hospitals Get all user notifications
 * @apiName GetNotifications
 * @apiGroup Notification
 * @apiPermission public
 * @apiVersion 1.0.0
 *
 * @apiDescription Returns all notifications for the current user.
 *
 * @apiSuccess {Integer}      id                  Notification ID
 * @apiSuccess {String}       title               Notification title
 * @apiSuccess {String}       title               Notification message
 * @apiSuccess {String}       datetime            Notification date and time
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { "notifications": [{
 *         "id": 1,
 *         "name": "AKH Wien"
 *       },
 *       {
 *         "id": 2,
 *         "name": "Donauspital Krems"
 *       }]
 *     }
 *
 * @apiErrorExample Success-Response:
 *     HTTP/1.1 401 Unauthorized
 */