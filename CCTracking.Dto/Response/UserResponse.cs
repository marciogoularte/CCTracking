using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class UserResponse : BaseModelResponse
    {
        public User UserModel { get; set; }
        public List<User> UserList { get; set; }
    }

    public class UserGridResponse : BaseModelResponse
    {        
        public List<UserGrid> UserList { get; set; }
    }
}
