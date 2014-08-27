using CCTracking.Dto;
using CCTracking.Dto.Response;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCTracking.DAL
{
    public class BusDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            dictionary.Add("@Id", id);
            return "GetBusById";
        }

        protected override string GetAllSql()
        {
            return "GetAllBus";
        }

        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            Bus bus = baseModel as Bus;
            dictionary.Add("@RegistrationNo", bus.RegistrationNo);
            return "GetBusByCriteria";
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary) 
        {
            Bus bus = baseModel as Bus;           
            dictionary.Add("@CentreId", bus.CentreId);
            dictionary.Add("@RegistrationNo", bus.RegistrationNo);
            dictionary.Add("@TrackingDeviceId", bus.TrackingDeviceId);
            dictionary.Add("@Model", bus.Model);
            dictionary.Add("@Description", bus.Description);
            base.ExecuteSql(bus, dictionary);
            return "dbo.SaveBus";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            BusResponse response = new BusResponse();
            Bus bus = null;
            if (dr.Read())
            {
                bus = new Bus();
                MapValues(bus, dr);
            }
            response.BusModel = bus;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            BusResponse response = new BusResponse();
            Bus bus = null;
            List<Bus> buses = new List<Bus>();
            while (dr.Read())
            {
                bus = new Bus();
                MapValues(bus, dr);
                buses.Add(bus);
            }
            response.BusList = buses;
            return response;
        }

        protected override BaseModelResponse ConvertToList(DataSet ds)
        {
            return null;
        }

        protected override void MapValues(BaseModel baseModel, IDataReader dr)
        {
            base.MapValues(baseModel, dr);
            Bus bus = baseModel as Bus;

            bus.CentreId = dr.GetInt32(dr.GetOrdinal("CentreId"));
            if (!dr.IsDBNull(dr.GetOrdinal("RegistrationNo")))
                bus.RegistrationNo = dr.GetString(dr.GetOrdinal("RegistrationNo"));
            if (!dr.IsDBNull(dr.GetOrdinal("TrackingDeviceId")))
                bus.TrackingDeviceId = dr.GetInt32(dr.GetOrdinal("TrackingDeviceId"));
            if (!dr.IsDBNull(dr.GetOrdinal("Model")))
                bus.Model = dr.GetString(dr.GetOrdinal("Model"));
            if (!dr.IsDBNull(dr.GetOrdinal("Description")))
                bus.Description = dr.GetString(dr.GetOrdinal("Description"));
        }
    }
}
