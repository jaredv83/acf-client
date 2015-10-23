import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import MembersPreview from './MembersPreview';

class Members extends Component {

  render() {
    const { members } = this.props;
    // const fakeMembers = [
    //   {
    //     displayName: 'Kai Curry',
    //     image: {
    //       uri: 'https://pbs.twimg.com/profile_images/1778395319/kai.jpg',
    //       height: 500,
    //       width: 375,
    //     },
    //     intro: 'Yo, I\'m KAI.',
    //     slug: 'kai-curry',
    //     usState: 'MN',
    //   },
    //   {
    //     displayName: 'Tim Lupfer',
    //     image: {
    //       uri: 'https://secure.gravatar.com/avatar/3004a23c78a756ba72f3dcc38fce62d9?d=https%3A%2F%2Fi.vimeocdn.com%2Fportrait%2Fdefault-blue_300x300.png&s=300',
    //       height: 300,
    //       width: 300,
    //     },
    //     intro: 'Swag taxidermy distillery paleo. American Apparel migas normcore tilde, taxidermy XOXO twee pop-up you probably haven\'t heard of them Etsy readymade +1 freegan. Kogi Austin pickled, taxidermy ennui kitsch plaid hella Etsy messenger bag. Salvia skateboard locavore narwhal, dreamcatcher jean shorts cray kale chips roof party art party sriracha fap organic. Ethical fingerstache selfies, Portland seitan viral pug roof party leggings. Schlitz church-key 8-bit, roof party cliche fixie tofu art party polaroid wayfarers DIY gastropub food truck. Hoodie actually fixie banjo seitan.',
    //     slug: 'tim-lupfer',
    //     usState: 'MN',
    //   },
    // ];

    return (
      <div className="container">
        <h1>Members</h1>
        <DocumentMeta title="CAPE: Members" />
        {
          members.map((member) => {
            return (
              <MembersPreview {...member} />
            );
          })
        }
      </div>
    );
  }
}

Members.propTypes = {
  members: React.PropTypes.array,
};

export default Members;
