import "../styles/TopCard.css"
const TopCard = () => {
    return (
        <div class="display-item">
            <div class="business-card">
                <div class="profile">
                    {/* <div class="profile-image"></div> */}
                    <div class="profile-title">
                        Supplier Name
                    </div>
                </div>
                <div class="info">
                    <div class="info-contact">
                        <span><i class="fa fa-phone"></i> Supplier Contact No.</span>
                        <span><i class="fa fa-at"></i>Supplier Email</span>
                    </div>
                    <div class="info-bio">
                        <ul>
                            <li>Supplier Ratings</li>
                            <li>Cost</li>
                            <li>Product Type</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCard