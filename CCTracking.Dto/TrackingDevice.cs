namespace CCTracking.Dto
{
    public class TrackingDevice : BaseModel
    {
        public string TrackingNo { get; set; }
    }

    public class TrackingDeviceGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string TrackingNo { get; set; }
    }
}
