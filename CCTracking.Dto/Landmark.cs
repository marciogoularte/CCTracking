﻿namespace CCTracking.Dto
{
    public class Landmark :  BaseModel
    {
        public int UcId { get; set; }
        public string  UcDesc { get; set; }
        public string Name { get; set; }
    }

    public class LandmarkGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string UcDesc { get; set; }
        public string Name { get; set; }
    }
}
