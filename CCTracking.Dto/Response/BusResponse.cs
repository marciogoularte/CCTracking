﻿using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class BusResponse : BaseModelResponse
    {
        public Bus BusModel { get; set; }
        public List<Bus> BusList { get; set; }
    }

    public class BusGridResponse : BaseModelResponse
    {
        public List<BusGrid> BusList { get; set; }
    }
}
