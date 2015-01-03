using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class BookingLeftResponse : BaseModelResponse
    {
        public BookingLeft BookingLeftModel { get; set; }
        public List<BookingLeft> BookingLeftList { get; set; }
    }
}
