<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LecturePlus_Table_t() {
  const [name, setName] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [classValue, setClassValue] = useState('1');
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios.get('/api/links').then(response => {
      setLinks(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  function saveLink() {
    axios.post('/api/links', { name, videoLink, class: classValue }).then(response => {
      setLinks([...links, response.data]);
      setName('');
      setVideoLink('');
      setClassValue('1');
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">강의 List</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <form>
            <table className="table table-bordered" id="userTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Video Link</th>
                  <th>Class</th>
                  <th>Save</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text" value={name} onChange={e => setName(e.target.value)} /></td>
                  <td><input type="text" value={videoLink} onChange={e => setVideoLink(e.target.value)} /></td>
                  <td>
                    <select value={classValue} onChange={e => setClassValue(e.target.value)}>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                    </select>
                  </td>
                  <td><button type="button" onClick={saveLink}>Save</button></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>Saved Video Links</td>
                </tr>
              </tfoot>
            </table>
          </form>
          <table>
            <tbody id="savedLinks">
              {links.map(link => (
                <tr key={link.id}>
                  <td>{link.name}</td>
                  <td><a href={link.videoLink}>{link.videoLink}</a></td>
                  <td>{`Class ${link.class}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );    
}

=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LecturePlus_Table_t() {
  const [name, setName] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [classValue, setClassValue] = useState('1');
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios.get('/api/links').then(response => {
      setLinks(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  function saveLink() {
    axios.post('/api/links', { name, videoLink, class: classValue }).then(response => {
      setLinks([...links, response.data]);
      setName('');
      setVideoLink('');
      setClassValue('1');
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">강의 List</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <form>
            <table className="table table-bordered" id="userTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Video Link</th>
                  <th>Class</th>
                  <th>Save</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text" value={name} onChange={e => setName(e.target.value)} /></td>
                  <td><input type="text" value={videoLink} onChange={e => setVideoLink(e.target.value)} /></td>
                  <td>
                    <select value={classValue} onChange={e => setClassValue(e.target.value)}>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                    </select>
                  </td>
                  <td><button type="button" onClick={saveLink}>Save</button></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>Saved Video Links</td>
                </tr>
              </tfoot>
            </table>
          </form>
          <table>
            <tbody id="savedLinks">
              {links.map(link => (
                <tr key={link.id}>
                  <td>{link.name}</td>
                  <td><a href={link.videoLink}>{link.videoLink}</a></td>
                  <td>{`Class ${link.class}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );    
}

>>>>>>> ffb0949aaef3ce9fa745bc3f044ce883e0bc1ab1
export default LecturePlus_Table_t;