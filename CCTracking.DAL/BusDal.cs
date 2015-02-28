﻿using CCTracking.Dto;
using CCTracking.Dto.Response;
using System;
using System.Collections.Generic;
using System.Data;

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
            dictionary.Add("@VehicleNo", bus.VehicleNo);
            dictionary.Add("@BookingId", bus.Id); //hack: id uses booking id
            return "GetBusByCriteria";
        }

        protected override string GetCountSql()
        {
            throw new NotImplementedException();
        }

        protected override string DelByIdSql(int id, Dictionary<string, object> dictionary)
        {
            throw new NotImplementedException();
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            Bus bus = baseModel as Bus;
            dictionary.Add("@CentreId", bus.CentreId);
            dictionary.Add("@VehicleNo", bus.VehicleNo);
            dictionary.Add("@AlkhidmatBusNo", bus.AlkhidmatBusNo);
            dictionary.Add("@TrackingDeviceId", bus.TrackingDeviceId);
            dictionary.Add("@ModelNo", bus.ModelNo);
            dictionary.Add("@No", bus.No);
            dictionary.Add("@InitialReading", bus.InitialReading);
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
            if (!dr.IsDBNull(dr.GetOrdinal("CentreDesc")))
                bus.CentreDesc = dr.GetString(dr.GetOrdinal("CentreDesc"));
            if (!dr.IsDBNull(dr.GetOrdinal("VehicleNo")))
                bus.VehicleNo = dr.GetString(dr.GetOrdinal("VehicleNo"));
            if (!dr.IsDBNull(dr.GetOrdinal("AlkhidmatBusNo")))
                bus.AlkhidmatBusNo = dr.GetInt32(dr.GetOrdinal("AlkhidmatBusNo"));
            if (!dr.IsDBNull(dr.GetOrdinal("TrackingDeviceId")))
                bus.TrackingDeviceId = dr.GetString(dr.GetOrdinal("TrackingDeviceId"));
            if (!dr.IsDBNull(dr.GetOrdinal("ModelNo")))
                bus.ModelNo = dr.GetString(dr.GetOrdinal("ModelNo"));
            if (!dr.IsDBNull(dr.GetOrdinal("No")))
                bus.No = dr.GetString(dr.GetOrdinal("No"));
            if (!dr.IsDBNull(dr.GetOrdinal("Description")))
                bus.Description = dr.GetString(dr.GetOrdinal("Description"));
            if (!dr.IsDBNull(dr.GetOrdinal("InitialReading")))
                bus.InitialReading = dr.GetInt64(dr.GetOrdinal("InitialReading"));
        }

        private void MapValuesGrid(BusGrid bus, IDataReader dr)
        {
            bus.Id = dr.GetDataReaderInt32("Id");
            bus.CentreDesc = dr.GetDataReaderString("CentreDesc");
            bus.VehicleNo = dr.GetDataReaderString("VehicleNo");
            bus.ModelNo = dr.GetDataReaderString("ModelNo");
            bus.Description = dr.GetDataReaderString("Description");
        }

        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            BusGridResponse response = new BusGridResponse();
            List<BusGrid> items = new List<BusGrid>();
            BusGrid item = null;
            while (dr.Read())
            {
                item = new BusGrid();
                MapValuesGrid(item, dr);
                items.Add(item);
            }
            response.BusList = items;
            return response;
        }
    }
}
