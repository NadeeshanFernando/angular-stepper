export class Employee {
    // Basic Details Tab👨‍💼
    // Employee Details
    public first_name !: string
    public middle_name !: string
    public last_name !: string
    public mobile_no !: string

    // User Details
    public epf_no !: string
    public department !: string
    public branch !: string
    public company !: string
    public designation !: string
    public grade !: string
    public date_of_joining !: string
    public hod_name !: string
    public epf_no_of_hod !: string

    // System Access Request Tab🔒
    // Virtual Working Environment
    public avc !: boolean
    public local_citrix_laptop !: boolean
    public local_citrix_pc !: boolean
    public vpn_cal_center !: boolean

    // Type of Device
    public personal_computer !: boolean
    public laptop_and_data_facility !: boolean
    public thin_client !: boolean
    public phone_extention !: boolean
    public desk_phone !: boolean
    public mobile_phone !: boolean

    // Office 365 License Type
    public e1 !: boolean
    public e3 !: boolean
    public f3 !: boolean
    public power_automate !: boolean

    // Application User Access Tab🛡
    // ACS
    public acs !: boolean
    public acs_replacement_id !: string
    public acs_reports !: boolean

    // IMS
    public ims !: boolean
    public ims_user_role_details !: string

    // DMS
    public dms_motor !: boolean
    public dms_non_motor !: boolean
    public dms_old !: boolean

    // PhotoCloud
    public photocloud !: boolean

    // Emotor
    public emotor !: boolean

    // CLM
    public clm !: boolean

    // Fins Finder
    public fins_finder !: boolean

    // ACSFI
    public acsfi !: boolean

    // Other
    public any_other !: string

    // Other Support Tool Tab⚙
    // Other Support Tools/Applications
    public air_watch !: boolean
    public microsoft_team !: boolean
    public training_access !: boolean
    public intranet_access !: boolean
    public servicenow_portal !: boolean
    public myallicia_portal !: boolean
    public share_folder_access !: boolean

    // Other Specific Requests/Notes
    
}
