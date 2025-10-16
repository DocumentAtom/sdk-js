import SdkBase from '../base/SdkBase';
import { SdkConfiguration } from '../base/SdkConfiguration';
import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { TypeDetectionResponse } from '../types';
import Utils from '../utils/Utils';

/**
 * Type Detection SDK class.
 * Extends the SdkBase class.
 * @module  TypeDetection
 * @extends SdkBase
 */
export default class TypeDetection extends SdkBase {
  constructor(config: SdkConfiguration) {
    super(config);
  }

  /**
   * Detects the type of the data.
   * @param {string} filePath - The file path to detect the type of.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<TypeDetectionResponse>} The type of the data.
   */
  detectType(filePath: string, cancellationToken: AbortController): Promise<TypeDetectionResponse> {
    if (!filePath) {
      GenericExceptionHandlers.ArgumentNullException('filePath');
    }

    const fileBinary = Utils.convertFileToBinary(filePath);

    const url = `${this.config.endpoint}typedetect`;

    return this.upload<any>(url, fileBinary, cancellationToken);
  }
}
