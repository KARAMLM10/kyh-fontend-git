namespace webAPI.Controller
{
    public class LoginController
    {
        //GET       hämta
        //,POST     create / skicka
        // get      read / hämta
        //, PUT      update </ ersätt
        //, PATCH    update / uppdatera
        //, DELETE      delete/ ta bort
        //  
        //htto methods
        // CRUD  creat,read,upadate,delete
        // status codes   200, 201, 204, 400, 401, 403, 404, 409, 500
        /*'
         200    ok 
        201     create
        204     no conect 
        400     bad request
        401     unauthorized
        403     forbidden
        404     not found
        409     conflict
        500     intenal server error
         
         */

        [HTTpPost]
        public async Task<IActionResult> Login(LoginForm)
        {

        }
    }
}
