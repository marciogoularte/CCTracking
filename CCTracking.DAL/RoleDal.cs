using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Collections.Generic;
using System.Data;

namespace CCTracking.DAL
{
    public class RoleDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            dictionary.Add("@Id", id);
            return "GetRoleById";
        }

        protected override string GetAllSql()
        {
            return "GetAllRole";
        }

        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            Role role = baseModel as Role;
            dictionary.Add("@Name", role.Name);
            return "GetRoleByCriteria";
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            Role role = baseModel as Role;
            dictionary.Add("@Name", role.Name);            
            base.ExecuteSql(role, dictionary);
            return "dbo.SaveRole";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            RoleResponse response = new RoleResponse();
            Role role = null;
            if (dr.Read())
            {
                role = new Role();
                MapValues(role, dr);
            }
            response.RoleModel = role;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            RoleResponse response = new RoleResponse();
            Role role = null;
            List<Role> rolees = new List<Role>();
            while (dr.Read())
            {
                role = new Role();
                MapValues(role, dr);
                rolees.Add(role);
            }
            response.RoleList = rolees;
            return response;
        }

        protected override BaseModelResponse ConvertToList(DataSet ds)
        {
            return null;
        }

        protected override string DelByIdSql(int id, Dictionary<string, object> dictionary)
        {
            return string.Empty;
        }

        protected override string GetCountSql()
        {
            return string.Empty;
        }

        protected override void MapValues(BaseModel baseModel, IDataReader dr)
        {
            base.MapValues(baseModel, dr);
            Role role = baseModel as Role;
            if (!dr.IsDBNull(dr.GetOrdinal("Name")))
                role.Name = dr.GetString(dr.GetOrdinal("Name"));
        }

        private void MapValuesGrid(RoleGrid role, IDataReader dr)
        {
            role.Id = dr.GetDataReaderInt32("Id");    
            role.Name = dr.GetDataReaderString("Name");
        }

        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            RoleGridResponse response = new RoleGridResponse();
            RoleGrid role = null;
            List<RoleGrid> rolees = new List<RoleGrid>();
            while (dr.Read())
            {
                role = new RoleGrid();
                MapValuesGrid(role, dr);
                rolees.Add(role);
            }
            response.RoleList = rolees;
            return response;
        }
    }
}
