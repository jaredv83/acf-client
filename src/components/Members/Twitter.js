import React from 'react';
import moment from 'moment';

function Twitter({twitter}) {
  return (
    <div className="col-md-6 col-sm-6">
      <div className="box-inner">
        <h3>
          <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
          RECENT TWEETS
        </h3>
        <div>
          { twitter &&
            twitter.map((tweet) => {
              const timeAgo = moment(tweet.created_at).fromNow();
              return (
                <div className="clearfix margin-bottom-20">
                  <img className="thumbnail pull-left" src={tweet.user.profile_image_url} width={60} height={60} alt />
                  <span className="size-13 text-muted">
                    {tweet.text}
                    &nbsp;
                    <span className="text-success size-11">{timeAgo}</span>
                  </span>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Twitter;
