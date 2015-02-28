using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace CCTracking.DAL
{
    public static class Extensions
    {
        private static bool HasColumn(this IDataRecord dr, string columnName)
        {
            for (int i = 0; i < dr.FieldCount; i++)
            {
                if (dr.GetName(i).Equals(columnName, StringComparison.InvariantCultureIgnoreCase))
                    return true;
            }
            return false;
        }

        public static Boolean GetDataReaderBoolean(this IDataReader reader, string ColumnName)
        {
            return (reader.IsColumnExists(ColumnName) && !reader.IsDBNull(reader.GetOrdinal(ColumnName))) ? Convert.ToBoolean(reader[ColumnName]) : false;
        }

        public static string GetDataReaderString(this IDataReader reader, string ColumnName)
        {
            return (reader.IsColumnExists(ColumnName) && !reader.IsDBNull(reader.GetOrdinal(ColumnName))) ? reader[ColumnName].ToString() : string.Empty;
        }

        public static Int32 GetDataReaderInt32(this IDataReader reader, string ColumnName)
        {
            return (reader.IsColumnExists(ColumnName) && !reader.IsDBNull(reader.GetOrdinal(ColumnName))) ? Convert.ToInt32(reader[ColumnName]) : 0;
        }

        public static Int64 GetDataReaderInt64(this IDataReader reader, string ColumnName)
        {
            return (reader.IsColumnExists(ColumnName) && !reader.IsDBNull(reader.GetOrdinal(ColumnName))) ? Convert.ToInt64(reader[ColumnName]) : 0;
        }

        public static byte GetDataReaderByte(this IDataReader reader, string ColumnName)
        {
            return (reader.IsColumnExists(ColumnName) && !reader.IsDBNull(reader.GetOrdinal(ColumnName))) ? Convert.ToByte(reader[ColumnName]) : Convert.ToByte(0);
        }

        public static DateTime GetDataReaderDateTime(this IDataReader reader, string ColumnName)
        {
            return (reader.IsColumnExists(ColumnName) && !reader.IsDBNull(reader.GetOrdinal(ColumnName))) ? Convert.ToDateTime(reader[ColumnName]) : DateTime.MinValue;
        }
    }
}