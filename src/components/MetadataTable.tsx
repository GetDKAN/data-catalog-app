import { useContext } from "react";
import { MetadataContext } from "@civicactions/data-catalog-components";

const MetadataTable = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  if (!metadata) {
    return null;
  }
  const thClasses: string = "border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-400 dark:border-gray-600 dark:text-gray-200";
  const tdClasses: string = "border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-gray-700 dark:text-gray-400";
  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Additional Information</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className={thClasses}>Field</th>
            <th className={thClasses}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={tdClasses}>Publisher</td>
            <td className={tdClasses}>{metadata.publisher?.data.name}</td>
          </tr>
          <tr>
            <td className={tdClasses}>Identifier</td>
            <td className={tdClasses}>{metadata.identifier}</td>
          </tr>
          <tr>
            <td className={tdClasses}>Issued</td>
            <td className={tdClasses}>{metadata.issued}</td>
          </tr>
          <tr>
            <td className={tdClasses}>Last Update</td>
            <td className={tdClasses}>{metadata.modified}</td>
          </tr>
          <tr>
            <td className={tdClasses}>License</td>
            <td className={tdClasses}>{metadata.license}</td>
          </tr>
          <tr>
            <td className={tdClasses}>Contact</td>
            <td className={tdClasses}>{metadata.contactPoint?.fn}</td>
          </tr>
          <tr>
            <td className={tdClasses}>Contact Email</td>
            <td className={tdClasses}>{metadata.contactPoint?.hasEmail}</td>
          </tr>
          <tr>
            <td className={tdClasses}>Public Access Level</td>
            <td className={tdClasses}>{metadata.accessLevel}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MetadataTable;