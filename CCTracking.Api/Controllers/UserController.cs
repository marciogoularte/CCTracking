using CCTracking.Api.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto.Response;
using CCTracking.Dto;


namespace CCTracking.Api.Controllers
{
    public class UserController : ApiController
    {
        //UserStore _userStore = new UserStore();
        static List<User> users = new List<User>();
        static int rowCounter=10;
        [HttpGet]
        public User Get(int id)
        {
            DBFacade facade = new UserDal();
            BaseModelResponse baseModelResponse = facade.GetById(id);
            UserResponse userResponse = baseModelResponse as UserResponse;
            return userResponse.UserModel;

        }
        [HttpGet]
        public List<User> GetAll()
        {
            //check if authentication token is invalid throw an exception
            IsValidAuthenticationToken();
            DBFacade facade = new UserDal();
            BaseModelResponse baseModelResponse = facade.GetAll();
            UserResponse userResponse = baseModelResponse as UserResponse;
            return userResponse.UserList;
        
        }
        private bool IsValidAuthenticationToken() 
        {
            IEnumerable<string> headerList = Request.Headers.GetValues("AuthenticationToken");
            string authenticationToken = headerList.FirstOrDefault();
            Guid authenticationGuid= Guid.Empty;
            try
            {
                if (Guid.TryParse(Security.Decrypt(authenticationToken), out authenticationGuid))
                {
                    return true;
                }
                else
                {
                    throw new HttpResponseException(new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized)
                    {
                        Content = new StringContent("Invalid Authentication Token")
                    });
                }
            }
            catch (Exception exp)
            {
                throw new HttpResponseException(new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized)
                {
                    Content = new StringContent("Invalid Authentication Token")
                });
            }
        }

        //private void FillUsers()
        //{
        //    if (users.Count < 20)
        //    {
        //        users = _userStore.GetAllUsers();
        //        //users.Add(new User { Id = 1, UserName = "Muhammad", FirstName = "Muhammad", LastName = "Ahmed", Email = "ma@ma.com", Mobile = "111222333", Password = "123" });
        //        //users.Add(new User { Id = 2, UserName = "username1", FirstName = "fname1", LastName = "lname1", Email = "email1@yahoo.com", Mobile = "1111111111", Password = "123" });
        //        //users.Add(new User { Id = 3, UserName = "username2", FirstName = "fname2", LastName = "lname2", Email = "email2@yahoo.com", Mobile = "2222222222", Password = "123" });
        //        //users.Add(new User { Id = 4, UserName = "username3", FirstName = "fname3", LastName = "lname3", Email = "email3@yahoo.com", Mobile = "3333333333", Password = "123" });
        //        //users.Add(new User { Id = 5, UserName = "username4", FirstName = "fname4", LastName = "lname4", Email = "email4@yahoo.com", Mobile = "4444444444", Password = "123" });
        //    }
        //}

        //[HttpGet]
        //public User Post(User user)
        //{
        //    User u = new User();
        //    u.AuthenticationToken = Guid.NewGuid().ToString();
        //    u.UserName = user.UserName;
        //    u.Password = user.Password;
        //    return u;
        //}

        [HttpGet]
        public LoginResponse Post(string UserName, string Password)
        {
            Login login = null;
            LoginResponse loginResponse = null;

            User user = new Dto.User { UserName = UserName, Password = Password };

            DBFacade facade = new UserDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(user);
            UserResponse userResponse = baseModelResponse as UserResponse;


            // User u = _userStore.GetAllUsers().Find(f => f.UserName.ToLower() == userName.ToLower() && f.Password == password);
            if (userResponse.UserList != null && userResponse.UserList.Count > 0)
            {
                loginResponse = new LoginResponse();
                login = new Login();

                user = userResponse.UserList.Find(u => u.UserName == UserName);

                login.Id = user.Id;
                login.UserName = user.UserName;
                login.FirstName = user.FirstName;
                login.LastName = user.LastName;
                login.Mobile = user.Mobile;
                login.Email = user.Email;
                login.Address = user.Address;
                login.CNIC = user.CNIC;
                login.AuthenticationToken = Security.Encrypt(Guid.NewGuid().ToString());
                login.IsAdmin = (Roles)user.RoleId == Roles.Admin;
                loginResponse.LoginModel = login;

                //u.AuthenticationToken = Security.Encrypt(Guid.NewGuid().ToString());
                //u.UserName = userName;
                //u.Password = password;

                //Request.Properties["AuthenticationToken"] = login.AuthenticationToken;

                //HttpCookie cookie = new HttpCookie("AuthenticationToken", login.AuthenticationToken);

                //var cookie = new CookieHeaderValue("AuthenticationToken", login.AuthenticationToken);

                //HttpContext.Current.Session.Add("AuthenticationToken", login.AuthenticationToken);
            }
            else if (!string.IsNullOrEmpty(userResponse.ErrorMessage))
            {
                loginResponse = new LoginResponse();
                login = new Login();

                login.ErrorMessage = userResponse.ErrorMessage;
                loginResponse.LoginModel = login;
                //HttpContext.Current.Session.Remove("AuthenticationToken");
            }
            //return Json(u, JsonRequestBehavior.AllowGet);
            //return JsonConvert.SerializeObject(u);
            return loginResponse;
        }



        [HttpPost]
        public User SaveUser(User user)
        {
            //TODO: if authenticaiton token is invalid then return
            //TODO: apply server side validation
            //TODO: save data in the db
            //if (user != null)
            //{
            //    if (user.Id <= 0)
            //    {
            //        user.Id = rowCounter++;
            //        users.Add(user);
            //    }
            //    else
            //    {
            //        //List<User> existingUser = users.Where(u => u.Id == user.Id).ToList();
            //        //existingUser.ForEach(u=>u=user);
            //        //existingUser = user;
            //        //User eu = users.Find(u => u.Id == user.Id);
            //        int i = 0;
            //        for (i = 0; i < users.Count; i++)
            //        {
            //            if (users[i].Id == user.Id)
            //                break;
            //        }
            //        users[i] = user;
            //    }
            //}
            return null;
        }

    }
}
