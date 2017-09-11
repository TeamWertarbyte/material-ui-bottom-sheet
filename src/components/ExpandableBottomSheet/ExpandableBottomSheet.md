Normal:
```
const { RaisedButton, Subheader, List, ListItem } = require('material-ui');
    <div>
    <RaisedButton label="Open BottomSheet" onClick={() => setState({isOpen: true})} />
      <ExpandableBottomSheet
        onRequestClose={() => setState({isOpen: false})}
        onTopReached={() => console.log('onTopReached')}
        open={state.isOpen}
      >
        <Subheader>Open in</Subheader>
        <List>
          <ListItem primaryText="Google Plus"/>
          <ListItem primaryText="Facebook"/>
          <ListItem primaryText="Inbox"/>
          <ListItem primaryText="TextEditor"/>
          <ListItem primaryText="Google Plus"/>
          <ListItem primaryText="Facebook"/>
          <ListItem primaryText="Inbox"/>
          <ListItem primaryText="TextEditor"/>
          <ListItem primaryText="Google Plus"/>
          <ListItem primaryText="Facebook"/>
          <ListItem primaryText="Inbox"/>
          <ListItem primaryText="TextEditor"/>
          <ListItem primaryText="Google Plus"/>
          <ListItem primaryText="Facebook"/>
          <ListItem primaryText="Inbox"/>
          <ListItem primaryText="TextEditor"/>
          <ListItem primaryText="Google Plus"/>
          <ListItem primaryText="Facebook"/>
          <ListItem primaryText="Inbox"/>
          <ListItem primaryText="TextEditor"/>
          <ListItem primaryText="Google Plus"/>
          <ListItem primaryText="Facebook"/>
          <ListItem primaryText="Inbox"/>
          <ListItem primaryText="TextEditor"/>
          <ListItem primaryText="Google Plus"/>
          <ListItem primaryText="Facebook"/>
          <ListItem primaryText="Inbox"/>
          <ListItem primaryText="TextEditor"/>
        </List>
      </ExpandableBottomSheet>
    </div>
```
Actions:
```
const { FloatingActionButton, Divider, RaisedButton, List, ListItem } = require('material-ui');
const { DeviceAccessTime, MapsDirectionsCar, MapsPlace, MapsLocalPhone } = require('material-ui/svg-icons');
    <div>
    <RaisedButton label="Open BottomSheet" onClick={() => setState({isOpen: true})} />
      <ExpandableBottomSheet
        action={
          <FloatingActionButton>
            <MapsDirectionsCar/>
          </FloatingActionButton>
        }
        onRequestClose={() => setState({isOpen: false})}
        onTopReached={() => console.log('onTopReached')}
        open={state.isOpen}
      >
        <h1 style={{marginLeft: 72, marginTop: 40}}>Dandelion Chocolate</h1>
        <Divider inset/>
        <List>
          <ListItem primaryText="740 Valencia St, San Francisco, CA" leftIcon={<MapsPlace/>}/>
          <ListItem primaryText="(415) 349-0942" leftIcon={<MapsLocalPhone/>}/>
          <ListItem primaryText="Wed, 10 AM - 9 PM" leftIcon={<DeviceAccessTime/>}/>
          <ListItem primaryText="740 Valencia St, San Francisco, CA" leftIcon={<MapsPlace/>}/>
          <ListItem primaryText="(415) 349-0942" leftIcon={<MapsLocalPhone/>}/>
          <ListItem primaryText="Wed, 10 AM - 9 PM" leftIcon={<DeviceAccessTime/>}/>
          <ListItem primaryText="740 Valencia St, San Francisco, CA" leftIcon={<MapsPlace/>}/>
          <ListItem primaryText="(415) 349-0942" leftIcon={<MapsLocalPhone/>}/>
          <ListItem primaryText="Wed, 10 AM - 9 PM" leftIcon={<DeviceAccessTime/>}/>
          <ListItem primaryText="740 Valencia St, San Francisco, CA" leftIcon={<MapsPlace/>}/>
          <ListItem primaryText="(415) 349-0942" leftIcon={<MapsLocalPhone/>}/>
          <ListItem primaryText="Wed, 10 AM - 9 PM" leftIcon={<DeviceAccessTime/>}/>
          <ListItem primaryText="740 Valencia St, San Francisco, CA" leftIcon={<MapsPlace/>}/>
          <ListItem primaryText="(415) 349-0942" leftIcon={<MapsLocalPhone/>}/>
          <ListItem primaryText="Wed, 10 AM - 9 PM" leftIcon={<DeviceAccessTime/>}/>
          <ListItem primaryText="740 Valencia St, San Francisco, CA" leftIcon={<MapsPlace/>}/>
          <ListItem primaryText="(415) 349-0942" leftIcon={<MapsLocalPhone/>}/>
          <ListItem primaryText="Wed, 10 AM - 9 PM" leftIcon={<DeviceAccessTime/>}/>
          <ListItem primaryText="740 Valencia St, San Francisco, CA" leftIcon={<MapsPlace/>}/>
          <ListItem primaryText="(415) 349-0942" leftIcon={<MapsLocalPhone/>}/>
          <ListItem primaryText="Wed, 10 AM - 9 PM" leftIcon={<DeviceAccessTime/>}/>
          <ListItem primaryText="740 Valencia St, San Francisco, CA" leftIcon={<MapsPlace/>}/>
          <ListItem primaryText="(415) 349-0942" leftIcon={<MapsLocalPhone/>}/>
          <ListItem primaryText="Wed, 10 AM - 9 PM" leftIcon={<DeviceAccessTime/>}/>
          <ListItem primaryText="740 Valencia St, San Francisco, CA" leftIcon={<MapsPlace/>}/>
          <ListItem primaryText="(415) 349-0942" leftIcon={<MapsLocalPhone/>}/>
          <ListItem primaryText="Wed, 10 AM - 9 PM" leftIcon={<DeviceAccessTime/>}/>
        </List>
      </ExpandableBottomSheet>
    </div>
```