using System;

namespace CCTracking.Dto
{
    public class BusVisit :  BaseModel
    {
        public int CentreId { get; set; }        
        public string CentreDesc { get; set; }
        public int BusId { get; set; }
        public string BusDesc { get; set; }
        public int DriverId { get; set; }
        public string DriverDesc { get; set; }
        public int VisitTypeId { get; set; }
        public string VisitTypeDesc { get; set; }
        public int BookingId { get; set; }
        public string InchargeName { get; set; }
        public DateTime? VisitDate { get; set; }
        public byte OutTime { get; set; }
        public byte ReturnTime { get; set; }
        public DateTime? ReturnDate { get; set; }
        public long ReadingWhenFilling { get; set; }
        public string PumpLocation { get; set; }
        public decimal FuelRate { get; set; }
        public decimal FuelAmount { get; set; }
        public bool IsBookingCompleted { get; set; }
        public long InitialReading { get; set; }
        public long FinalReading { get; set; }
        public decimal FuelQuantity { get; set; }
        public string FuelingReceipt { get; set; }
        
        public string Description { get; set; }
        public string BusChangeReason { get; set; }
        //Report Related Properties

        public string Milage { get; set; }
        public int VisitCount { get; set; }
        public string VisitInterval { get; set; }
        public string VehicleNo { get; set; }
        public string OutTimeDesc { get; set; }
        public string ReturnTimeDesc { get; set; }
    }

    public class AuditBusVisit : BaseModel
    {
        public int RowCounter { get; set; }
        public int BookingId { get; set; }

        public string CentreId { get; set; }
        public string CentreDesc { get; set; }
        public string BusId { get; set; }
        public string BusDesc { get; set; }
        public string DriverId { get; set; }
        public string DriverDesc { get; set; }
        public string VisitTypeId { get; set; }
        public string VisitTypeDesc { get; set; }
        
        public string InchargeName { get; set; }
        public string VisitDate { get; set; }
        public string OutTime { get; set; }
        public string ReturnTime { get; set; }
        public string ReturnDate { get; set; }
        public string ReadingWhenFilling { get; set; }
        public string PumpLocation { get; set; }
        public string FuelRate { get; set; }
        public string FuelAmount { get; set; }
        public string IsBookingCompleted { get; set; }
        public string InitialReading { get; set; }
        public string FinalReading { get; set; }
        public string FuelQuantity { get; set; }
        public string FuelingReceipt { get; set; }
        public string Description { get; set; }
        public string BusChangeReason { get; set; }
        public string Receipt { get; set; }
        public string BusStatus { get; set; }

        //Report Related Properties

        public string Milage { get; set; }
        public string VisitCount { get; set; }
        public string VisitInterval { get; set; }
        public string VehicleNo { get; set; }
        public string OutTimeDesc { get; set; }
        public string ReturnTimeDesc { get; set; }

        //for auditing purpose
        public int OperationType { get; set; }
        public DateTime ActualModifiedDate { get; set; }
        public string UserName { get; set; }
    }
    
}
