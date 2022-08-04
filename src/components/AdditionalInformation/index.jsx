import React from 'react';

const AdditionalInformation = ({metadata}) => {
  console.log(metadata)
  const dateOptions = { year:"numeric", month:"short", day:"numeric"};
  const { issued, identifier, publisher, modified, license, contactPoint, accessLevel } = metadata;

  return (
    <table className="usa-table">
      <caption>Additional Information</caption>
      <thead>
        <tr>
          <th scope="col">Field</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {publisher && publisher.data &&
          <tr>
            <td>Publisher</td>
            <td>{publisher.data.name}</td>
          </tr>
        }
        {identifier &&
          <tr>
            <td>Identifier</td>
            <td>{identifier}</td>
          </tr>
        }
        {issued &&
          <tr>
            <td>Issued</td>
            <td>{new Date(issued).toLocaleDateString('en-us', dateOptions)}</td>
          </tr>
        }
        {modified &&
          <tr>
            <td>Last Update</td>
            <td>{new Date(modified).toLocaleDateString('en-us', dateOptions)}</td>
          </tr>
        }
        {license &&
          <tr>
            <td>License</td>
            <td>{license}</td>
          </tr>
        }
        {contactPoint && contactPoint.fn &&
          <tr>
            <td>Contact</td>
            <td>{contactPoint.fn}</td>
          </tr>
        }
        {contactPoint && contactPoint.hasEmail &&
          <tr>
            <td>Contact E-mail</td>
            <td>{contactPoint.hasEmail}</td>
          </tr>
        }
        {accessLevel &&
          <tr>
            <td>Public Access Level</td>
            <td>{accessLevel}</td>
          </tr>
        }
      </tbody>
    </table>
  )
};

export default AdditionalInformation;
