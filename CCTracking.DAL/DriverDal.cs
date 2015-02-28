﻿using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Collections.Generic;
using System.Data;

namespace CCTracking.DAL
{
    public class DriverDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            dictionary.Add("@Id", id);
            return "GetDriverById";
        }

        protected override string GetAllSql()
        {
            return "GetAllDriver";
        }

        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            Driver driver = baseModel as Driver;
            dictionary.Add("@FirstName", driver.FirstName);
            return "GetDriverByCriteria";
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            Driver driver = baseModel as Driver;
            dictionary.Add("@CentreId", driver.CentreId);
            dictionary.Add("@FirstName", driver.FirstName);
            dictionary.Add("@LastName", driver.LastName);
            dictionary.Add("@CNIC", driver.Cnic);
            dictionary.Add("@Mobile", driver.Mobile);
            dictionary.Add("@Address", driver.Address);
            dictionary.Add("@City", driver.City);
            base.ExecuteSql(driver, dictionary);
            return "dbo.SaveDriver";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            DriverResponse response = new DriverResponse();
            Driver driver = null;
            if (dr.Read())
            {
                driver = new Driver();
                MapValues(driver, dr);
            }
            response.DriverModel = driver;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            DriverResponse response = new DriverResponse();
            Driver driver = null;
            List<Driver> drivers = new List<Driver>();
            while (dr.Read())
            {
                driver = new Driver();
                MapValues(driver, dr);
                drivers.Add(driver);
            }
            response.DriverList = drivers;
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

        protected virtual void MapValues(BaseModel baseModel, IDataReader dr)
        {
            base.MapValues(baseModel, dr);
            Driver driver = baseModel as Driver;
            driver.CentreId = dr.GetInt32(dr.GetOrdinal("CentreId"));
            if (!dr.IsDBNull(dr.GetOrdinal("CentreDesc")))
                driver.CentreDesc = dr.GetString(dr.GetOrdinal("CentreDesc"));
            driver.FirstName = dr.GetString(dr.GetOrdinal("FirstName"));
            if (!dr.IsDBNull(dr.GetOrdinal("LastName")))
                driver.LastName = dr.GetString(dr.GetOrdinal("LastName"));
            if (!dr.IsDBNull(dr.GetOrdinal("Address")))
                driver.Address = dr.GetString(dr.GetOrdinal("Address"));
            if (!dr.IsDBNull(dr.GetOrdinal("City")))
                driver.City = dr.GetString(dr.GetOrdinal("City"));
            if (!dr.IsDBNull(dr.GetOrdinal("Mobile")))
                driver.Mobile = dr.GetString(dr.GetOrdinal("Mobile"));
            if (!dr.IsDBNull(dr.GetOrdinal("CNIC")))
                driver.Cnic = dr.GetString(dr.GetOrdinal("CNIC"));
        }

        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            DriverGridResponse response = new DriverGridResponse();
            List<DriverGrid> items = new List<DriverGrid>();
            DriverGrid item = null;
            while (dr.Read())
            {
                item = new DriverGrid();
                MapValuesGrid(item, dr);
                items.Add(item);
            }
            response.DriverList = items;
            return response;
        }

        private void MapValuesGrid(DriverGrid driver, IDataReader dr)
        {
            driver.Id = dr.GetDataReaderInt32("Id");
            driver.FirstName = dr.GetDataReaderString("FirstName");
            driver.LastName = dr.GetDataReaderString("LastName");
            driver.Mobile = dr.GetDataReaderString("Mobile");
            driver.Cnic = dr.GetDataReaderString("Cnic");
            driver.Address = dr.GetDataReaderString("Address");
            driver.CentreDesc = dr.GetDataReaderString("CentreDesc");
        }
    }
}
