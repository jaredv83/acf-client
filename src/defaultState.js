import memberList from './memberList';

function createNavLink(id, args = {}) {
  const {text, to, authenticated, rest} = args;
  return {
    authenticated,
    id,
    text: text || id.charAt(0).toUpperCase() + id.slice(1),
    to: to || '/' + id,
    ...rest,
  };
}

export default {
  members: {
    filters: {},
    data: memberList,
  },
  db: {
    support: {
      chat: 'https://www.hipchat.com/gv1XLjgaV',
      bugs: 'https://github.com/cape-io/cape-editor/issues',
    },
    title: 'ACF Client',
    description: 'Membership Fun',
    image: 'https://pbs.twimg.com/profile_images/568082657292976128/SNZjMW8N.png',
    tagline: 'Create Anywhere Publish Everywhere',
    navLinks: [
      createNavLink('about', {text: 'About Us'}),
      createNavLink('members'),
    ],
  },
};
