import React, { Component } from 'react';
import imgNew1 from '../../asets/images/new1.jpg';
import imgNew2 from '../../asets/images/new2.jpg';
import imgNew3 from '../../asets/images/new3.jpg';
import imgNew1a from '../../asets/images/new1a.png';
import imgNew1b from '../../asets/images/new1b.png';
import imgNew1c from '../../asets/images/new1c.png';
import imgNew1d from '../../asets/images/new1d.jpeg';
import imgNew1e from '../../asets/images/new1e.jpg';
import imgNew2a from '../../asets/images/new2a.png';
import imgNew2b from '../../asets/images/new2b.png';
import imgNew2c from '../../asets/images/new2c.png';
import imgNew2d from '../../asets/images/new2d.jpeg';
import imgNew2e from '../../asets/images/new2e.jpg';
import imgNew2f from '../../asets/images/new2f.png';
import imgNew2g from '../../asets/images/new2g.jpg';
import imgNew2h from '../../asets/images/new2h.jpg';
import imgNew3a from '../../asets/images/new3a.jpg';
import imgNew3b from '../../asets/images/new3b.png';
import imgNew3c from '../../asets/images/new3c.jpg';
import imgNew3d from '../../asets/images/new3d.png';
class News extends Component {

  render() {
    return (
      <section className="section-main-content">
        <div className="container">
          <h3 className="section-title">New tips</h3>
          <div className="div-new">
            <div className="list-check">
              <label htmlFor="new-check-1">
                <div className="new-wrap">
                  <img className="new-img" alt="abc" src={imgNew1} />
                  <p className="new-check-name">Perfume Tip</p>
                </div>
              </label>
              <label htmlFor="new-check-2">
                <div className="new-wrap">
                  <img className="new-img" alt="abc" src={imgNew2} />
                  <p className="new-check-name">Preserve Perfume</p>
                </div>
              </label>
              <label htmlFor="new-check-3">
                <div className="new-wrap">
                  <img className="new-img" alt="abc" src={imgNew3} />
                  <p className="new-check-name">How to choose fragrance</p>
                </div>
              </label>
            </div>
            <input id="new-check-1" type="radio" name="news" />
            <div className="news news-1">
              <div className="new-card">
                <h5 className="new-name shining-text">Perfume Tip</h5>
                <ul className="new-list">
                  <li className="col-12 new-item">
                    <img src={imgNew1d} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>1. Target pulse points and warm areas on your body when spraying perfume.</p></li>
                  <li className="col-12 new-item">
                    <img src={imgNew1e} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>2. Spraying your ankles and calves will allow the scents to rise throughout the day.</p></li>
                  <li className="col-12 new-item">
                    <img src={imgNew1a} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>3. Behind nape: Help the scent you like to linger subtly throughout the day.</p></li>
                  <li className="col-12 new-item">
                    <img src={imgNew1b} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>4. Inside the elbow: Is one of the "pulse points" for spraying.</p></li>
                  <li className="col-12 new-item">
                    <img src={imgNew1c} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>5. Neck: Effective immediately, aromatic with time, unlike other parts of the body.</p></li>
                </ul>
              </div>
            </div>
            <input id="new-check-2" type="radio" name="news" />
            <div className="news news-2">
              <div className="new-card">
                <h5 className="new-name shining-text">Preserve Perfume</h5>
                <ul className="new-list">
                  <li className="col-6 new-item">
                    <img src={imgNew2a} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>1. Keep the Bottle Closed Until the First.</p></li>
                  <li className="col-6 new-item">
                    <img src={imgNew2b} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>2. Do not shake vigorously before spraying</p></li>
                  <li className="col-6 new-item">
                    <img src={imgNew2c} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>3. Store Your Perfume in a Dark Place.</p></li>
                  <li className="col-6 new-item">
                    <img src={imgNew2d} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>4. Store Your Fragrance in a Dry Place.</p></li>
                  <li className="col-6 new-item">
                    <img src={imgNew2e} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>5. Avoid Storing Perfume in the Bathroom.</p></li>
                  <li className="col-6 new-item">
                    <img src={imgNew2f} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>6. Keep Your Perfume in the Original Box.</p></li>
                  <li className="col-6 new-item">
                    <img src={imgNew2g} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>7. Store on a Low-Level Shelf.</p></li>
                  <li className="col-6 new-item">
                    <img src={imgNew2h} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>8. Keep the Bottle Sealed When Not in Use.</p></li>
                </ul>
              </div>
            </div>
            <input id="new-check-3" type="radio" name="news" />
            <div className="news news-3">
              <div className="new-card">
                <h5 className="new-name shining-text">How to choose fragrance</h5>
                <ul className="new-list">
                  <li className="col-12 new-item">
                    <img src={imgNew3a} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>1. Choose perfume according to personality.</p></li>
                  <li className="col-12 new-item">
                    <img src={imgNew3b} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>2. Do not try more than 3 odors at once.</p></li>
                  <li className="col-12 new-item">
                    <img src={imgNew3c} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>3. Choose perfume from fresh floor. Try and buying perfect perfume.</p></li>
                  <li className="col-12 new-item">
                    <img src={imgNew3d} style={{ width: '100px', height: '90px', borderRadius: '50%' }}></img>
                    <p>4. Ask for advice from people who have a taste and know how to choose the right perfume.</p></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}
export default News;
