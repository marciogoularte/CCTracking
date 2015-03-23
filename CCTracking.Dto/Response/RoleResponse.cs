using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class RoleResponse : BaseModelResponse
    {
        public Role RoleModel { get; set; }
        public List<Role> RoleList { get; set; }
    }

    public class RoleGridResponse : BaseModelResponse
    {
        public List<RoleGrid> RoleList { get; set; }
    }
}
