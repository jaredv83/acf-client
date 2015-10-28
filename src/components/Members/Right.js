import React, { PropTypes } from 'react';
import moment from 'moment';

function Right({ displayName, twitter }) {
  return (
    <div>
      <div className="box-light">{/* .box-light OR .box-dark */}
        <div className="row">
          {/* TWEETS */}
          <div className="col-md-6 col-sm-6">
            <div className="box-inner">
              <h3>
                <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                RECENT TWEETS
              </h3>
              <div>
                {
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
          {/* /TWEETS */}
          {/* FRIENDS */}
          <div className="col-md-6 col-sm-6">
            <div className="box-inner">
              <h3>
                <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                FRIENDS
              </h3>
              <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                <div className="clearfix margin-bottom-10">{/* squared item */}
                  <img className="thumbnail pull-left" src="/images/demo/people/300x300/1-min.jpg" width={40} height={40} alt />
                  <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Joana Doe</a></h4>
                  <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                </div>{/* /squared item */}
                <div className="clearfix margin-bottom-10">{/* rounded item */}
                  <img className="thumbnail pull-left rounded" src="/images/demo/people/300x300/2-min.jpg" width={40} height={40} alt />
                  <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Melissa Doe</a></h4>
                  <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                </div>{/* /rounded item */}
                <div className="clearfix margin-bottom-10">{/* squared item */}
                  <img className="thumbnail pull-left" src="/images/demo/people/300x300/3-min.jpg" width={40} height={40} alt />
                  <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">{displayName}</a></h4>
                  <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                </div>{/* /squared item */}
                <div className="clearfix margin-bottom-10">{/* rounded item */}
                  <img className="thumbnail pull-left rounded" src="/images/demo/people/300x300/4-min.jpg" width={40} height={40} alt />
                  <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Suzana Doe</a></h4>
                  <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                </div>{/* /rounded item */}
                <div className="clearfix margin-bottom-10">{/* squared item */}
                  <img className="thumbnail pull-left" src="/images/demo/people/300x300/5-min.jpg" width={40} height={40} alt />
                  <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Jolie Doe</a></h4>
                  <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                </div>{/* /squared item */}
              </div>
            </div>
            <div className="box-footer">
              {/* INLINE SEARCH */}
              <div className="inline-search clearfix">
                <form action="#" method="get" className="widget_search nomargin">
                  <input type="search" placeholder="Search Friend..." name="s" className="serch-input" />
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                  <div className="clear" />
                </form>
              </div>
              {/* /INLINE SEARCH */}
            </div>
          </div>
          {/* /FRIENDS */}
        </div>
        <div className="row margin-top-30">
          {/* DISCUSSIONS */}
          <div className="col-md-6 col-sm-6">
            <div className="box-inner">
              <h3>
                <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                DISCUSSIONS
              </h3>
              <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                <div className="clearfix margin-bottom-20">{/* discussion item */}
                  <img className="thumbnail pull-left" src="/images/demo/people/300x300/3-min.jpg" width={60} height={60} alt />
                  <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">Joana Doe</a></h4>
                  <span className="size-13 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span className="text-success size-11">12 min. ago</span>
                  </span>
                </div>{/* /discussion item */}
                <div className="clearfix margin-bottom-20">{/* discussion item */}
                  <img className="thumbnail pull-left" src="/images/demo/people/300x300/4-min.jpg" width={60} height={60} alt />
                  <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">Melissa Doe</a></h4>
                  <span className="size-13 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span className="text-success size-11">54 min. ago</span>
                  </span>
                  </div>{/* /discussion item */}
                <div className="clearfix margin-bottom-20">{/* discussion item */}
                  <img className="thumbnail pull-left" src="/images/demo/people/300x300/5-min.jpg" width={60} height={60} alt />
                  <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">juliet Doe</a></h4>
                  <span className="size-13 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span className="text-success size-11">8 days ago</span>
                  </span>
                </div>{/* /discussion item */}
                <div className="clearfix margin-bottom-20">{/* discussion item */}
                  <img className="thumbnail pull-left" src="/images/demo/people/300x300/6-min.jpg" width={60} height={60} alt />
                  <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">Suanna Doe</a></h4>
                  <span className="size-13 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span className="text-success size-11">12 day ago</span>
                  </span>
                </div>{/* /discussion item */}
                <div className="clearfix margin-bottom-20">{/* discussion item */}
                  <img className="thumbnail pull-left" src="/images/demo/people/300x300/7-min.jpg" width={60} height={60} alt />
                  <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">{displayName}</a></h4>
                  <span className="size-13 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span className="text-success size-11">1 month ago</span>
                  </span>
                </div>{/* /discussion item */}
              </div>
            </div>
            <div className="box-footer">
              {/* INLINE SEARCH */}
              <div className="inline-search clearfix">
                <form action="#" method="get" className="widget_search nomargin">
                  <input type="search" placeholder="Search Discussion..." name="s" className="serch-input" />
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                  <div className="clear" />
                </form>
              </div>
              {/* /INLINE SEARCH */}
            </div>
          </div>
          {/* /DISCUSSIONS */}
          {/* NOTIFICATIONS */}
          <div className="col-md-6 col-sm-6">
            <div className="box-inner">
              <h3>
                <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                NOTIFICATIONS
              </h3>
              <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                <div className="clearfix margin-bottom-20">{/* notification item */}
                  <span className="label label-success label-square pull-left">
                    <i className="fa fa-comment" />
                  </span>
                  <span className="size-14 text-muted"><b>New Comment</b>: <a href="blog-single-default.html">Lorem ipsum Dolor</a></span>
                </div>{/* /notification item */}
                <div className="clearfix margin-bottom-20">{/* notification item */}
                  <span className="label label-danger label-square pull-left">
                    <i className="glyphicon glyphicon-remove" />
                  </span>
                  <span className="size-14 text-muted"><b>Rejected</b>: <a href="#">Joana Doe</a> rejected friendship</span>
                </div>{/* /notification item */}
                <div className="clearfix margin-bottom-20">{/* notification item */}
                  <span className="label label-warning label-square pull-left">
                    <i className="fa fa-warning" />
                  </span>
                  <span className="size-14 text-muted"><b>Warning</b>: Lorem ipsum Dolor</span>
                </div>{/* /notification item */}
                <div className="clearfix margin-bottom-20">{/* notification item */}
                  <span className="label label-info label-square pull-left">
                    <i className="fa fa-info-circle" />
                  </span>
                  <span className="size-14 text-muted"><b>Info</b>: Lorem ipsum Dolor</span>
                </div>{/* /notification item */}
                <div className="clearfix margin-bottom-20">{/* notification item */}
                  <span className="label label-primary label-square pull-left">
                    <i className="fa fa-check" />
                  </span>
                  <span className="size-14 text-muted"><b>Primary</b>: Lorem ipsum Dolor</span>
                </div>{/* /notification item */}
                <div className="clearfix margin-bottom-20">{/* notification item */}
                  <span className="label label-default label-square pull-left">
                    <i className="fa fa-heart-o" />
                  </span>
                  <span className="size-14 text-muted"><b>Default</b>: Lorem ipsum Dolor</span>
                </div>{/* /notification item */}
                <div className="clearfix margin-bottom-20">{/* notification item */}
                  <span className="label label-purple label-square pull-left">
                    <i className="fa fa-clock-o" />
                  </span>
                  <span className="size-14 text-muted"><b>Various</b>: Lorem ipsum Dolor</span>
                </div>{/* /notification item */}
              </div>
            </div>
            <div className="box-footer">
              {/* INLINE SEARCH */}
              <div className="inline-search clearfix">
                <form action="#" method="get" className="widget_search nomargin">
                  <input type="search" placeholder="Search notification..." name="s" className="serch-input" />
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                  <div className="clear" />
                </form>
              </div>
              {/* /INLINE SEARCH */}
            </div>
          </div>
          {/* /NOTIFICATIONS */}
        </div>
      </div>
      <form method="post" action="#" className="box-light margin-top-20">{/* .box-light OR .box-dark */}
        <div className="box-inner">
          <h4 className="uppercase">LEAVE A MESSAGE TO <strong>{displayName}</strong></h4>
          <textarea required className="form-control word-count" data-maxlength={100} rows={5} placeholder="Type your message here..." />
          <div className="text-muted text-right margin-top-3 size-12 margin-bottom-10">
            <span>0/100</span> Words
          </div>
          <button type="submit" className="btn btn-primary"><i className="fa fa-check" /> SEND MESSAGE</button>
        </div>
      </form>
    </div>
  );
}
Right.propTypes = {
  displayName: PropTypes.string,
};
// Logout.defaultProps = {};

export default Right;
