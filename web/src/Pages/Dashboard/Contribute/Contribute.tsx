import { Tabs } from '@arco-design/web-react';

// importing styles
import "./Contribute.css"

// importing custom components
import ListPlaces from './Places List/PlacesList';
import ContributePlaces from './Add Places/ContributePlaces';
import { account } from '../../../lib/appwrite';

const TabPane = Tabs.TabPane;

export default function Contribute() {
    return(

        <div className="dashboard-content contributions">
          <div className="content">
            <div className="profile-section">
              <div className="profile-content">
                <div className="contributed-places-wrapper">
                  {/* <button onClick={async () => {
                    await account.createJWT()
                  }} >Create jwt</button> */}
                    <Tabs defaultActiveTab='contributed_places' style={{width: '100%'}}>
                        <TabPane key='contributed_places' title='Places Contributed'>
                            <ListPlaces />
                        </TabPane>

                        <TabPane key='contribute' title='Contribute'>
                            <ContributePlaces />
                        </TabPane>
                    </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}