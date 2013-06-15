/**
 * @api {post} /sign_in Sign In
 * @apiName SignIn
 * @apiGroup Authentication
 * @apiPermission public
 * @apiVersion 1.0.0
 *
 * @apiDescription On success, generated security tokens are returned
 *
 * @apiSuccess {String}       user_id							User ID
 * @apiSuccess {String}       auth_token          Authtentication Token
 * @apiSuccess {String}       remember_token      Remember Token
 *
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 403 Forbidden
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "userid": "1",
 *   "auth_token": "SomeLongRandomString"
 *   "remember_token": "AnotherLongRandomString"
 * }
 */

 /**
 * @api {delete} /sign_out Sign Out
 * @apiName SignOut
 * @apiGroup Authentication
 * @apiPermission public
 * @apiVersion 1.0.0
 *
 * @apiDescription Signs the user out.
 *
 * @apiParam    {String}      user_id							User ID
 * @apiParam    {String}      auth_token					Authtentication token
 *
 * @apiSuccess  {String}      user_id             User id
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * { "hospital": {
 *     "user_id": "1"
 *   }
 * }
 */