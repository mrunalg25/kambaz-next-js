export default function CourseStatus() { 
    return ( 
      <aside
      style={{
        width: "250px",
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "6px",
        background: "#f9f9f9",
      }}
    >
      <h3>Course Status</h3>

      
      <button style={{ display: "block", marginBottom: "10px" }}>Unpublish</button>
      <button style={{ display: "block", marginBottom: "10px" }}>Publish</button>
      <button style={{ display: "block", marginBottom: "10px" }}>
        Import Existing Content
      </button>
      <button style={{ display: "block", marginBottom: "10px" }}>
        Import from Commons
      </button>
      <button style={{ display: "block", marginBottom: "10px" }}>
        Choose Home Page
      </button>
      <button style={{ display: "block", marginBottom: "10px" }}>
        View Course Stream
      </button>
      <button style={{ display: "block", marginBottom: "10px" }}>
        New Announcement
      </button>
      <button style={{ display: "block", marginBottom: "10px" }}>
        New Analytics
      </button>
      <button style={{ display: "block", marginBottom: "10px" }}>
        View Course Notifications
      </button>
    </aside>
  );
}