namespace CCTracking.Dto
{

    public class BookingLeft : BaseModel
    {
        public int OfficerId { get; set; }
        public int TodaysBooking { get; set; }
        public int UserTotalBooking { get; set; }
        public int UserPiadBooking { get; set; }
        public int UserUnpaidBooking { get; set; }
    }
}

