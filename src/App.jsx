import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import DiscussionSettings from './DiscussionSettings'
import GeneralSettings from './GeneralSetting'
import PermalinkSettings from './PermalinkSettings'
import PrivacySettings from './PrivacySettings'
import MediaSettings from './MediaSettings'
import ReadingSettings from './ReadingSettings'
import WritingSettings from './WritingSettings'
import AddPage from './Addpage'
import AllPage from './AllPage'
import Themes from './Themes'
import Alluser from './Alluser'
import Adduser from './Adduser'
import Allpost from './Allpost'
import Profile from './Profile'
import Comment from './Comment'
import Browsermediafile from './Browsermediafile'
import Addpost from './Addpost'
import Categories from './Categories'
import Posttage from './Posttage'
import Dashbordupdated from './Dashbordupdeted'
import Library from './Library'
import Tools from './Tools'
import Export from './Export'
import Sitehealth from './Sitehealth'
import ExportPersonalData from './ExportPersonalData'
import ErasePersonalData from './ErasePersonalData'
import NewMedia from './NewMedia'
import Imports from './Imports'
import Dashboardhome from './Dashboardhome.jsx'


import Mobileheader from './bueatyproduct/Mobailheader'
import Bueatyorganic from './Bueatyproduct/Bueatyorganic'
import HOME from './bueatyproduct/home.jsx'
import Productheader from './Bueatyproduct/Productheader.jsx'



function App() {
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<HOME/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='/Dashboardhome' element={<Dashboardhome/>} />
        <Route path="/GeneralSettings" element={<GeneralSettings />} />
        <Route path="/WritingSettings" element={<WritingSettings />} /> 
        <Route path="/ReadingSettings" element={<ReadingSettings />} />
        <Route path="/DiscussionSettings" element={<DiscussionSettings />} />
         <Route path="/MediaSettings" element={<MediaSettings />} /> 
         <Route path="/PermalinkSettings" element={<PermalinkSettings />} /> 
         <Route path="/PrivacySettings" element={<PrivacySettings />} /> 
         <Route path='/Allpage' element={< AllPage/>} />
        <Route path="/Addpage" element={<AddPage/>} />
        <Route path="/Themes" element={<Themes />} />
        <Route path="/Alluser" element={<Alluser />} />
        <Route path="/Adduser" element={<Adduser />} />
        <Route path="/Profile" element={< Profile/>} />
        <Route path="/Allpost" element={<Allpost />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Comments" element={<Comment />} />
        <Route path="/Browsermediafile" element={<Browsermediafile />} />
        <Route path="/Addpost" element={<Addpost />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Posttage" element={<Posttage />} />
        <Route path="/Dashbordupdated" element={<Dashbordupdated />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Imports" element={<Imports />} />
        <Route path="/Export" element={<Export />} />
        <Route path="/Sitehealth" element={<Sitehealth />} />
        <Route path="/ExportPersonalData" element={<ExportPersonalData />} />
        <Route path="/ErasePersonalData" element={<ErasePersonalData />} />
        <Route path="/NewMedia" element={<NewMedia />} />
        <Route path='/Mobileheader' element={<Mobileheader />} />
       <Route path='/Bueatyorganic' element={<Bueatyorganic />} />
       <Route path='/productheader' element={<Productheader />} />
      
        {/* Add more routes as needed */}
        </Routes>
    </div>
  )
}

export default App