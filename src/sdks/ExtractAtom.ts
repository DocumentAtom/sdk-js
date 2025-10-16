import SdkBase from '../base/SdkBase';
import { SdkConfiguration } from '../base/SdkConfiguration';
import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';
import { ExtractAtomResponse } from '../types';
import Utils from '../utils/Utils';

export default class ExtractAtom extends SdkBase {
  constructor(config: SdkConfiguration) {
    super(config);
  }
  /**
   * Extracts the atoms from the document.
   * @param {string} filePath - The path to the file.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<ExtractAtomResponse>} The atoms from the document.
   */
  excel(filePath: string, cancellationToken: AbortController): Promise<ExtractAtomResponse> {
    if (!filePath) {
      GenericExceptionHandlers.ArgumentNullException('filePath');
    }

    const fileBinary = Utils.convertFileToBinary(filePath);

    const url = `${this.config.endpoint}atom/excel`;

    return this.upload<ExtractAtomResponse>(url, fileBinary, cancellationToken);
  }

  /**
   * Extracts the atoms from an HTML document.
   * @param {string} filePath - The path to the HTML file.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<ExtractAtomResponse>} The atoms from the HTML document.
   */
  html(filePath: string, cancellationToken: AbortController): Promise<ExtractAtomResponse> {
    if (!filePath) {
      GenericExceptionHandlers.ArgumentNullException('filePath');
    }

    const fileBinary = Utils.convertFileToBinary(filePath);

    const url = `${this.config.endpoint}atom/html`;

    return this.upload<ExtractAtomResponse>(url, fileBinary, cancellationToken);
  }

  /**
   * Extracts the atoms from an OCR (image-based) document.
   * @param {string} filePath - The path to the OCR file.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<ExtractAtomResponse>} The atoms extracted from the OCR file.
   */
  ocr(filePath: string, cancellationToken: AbortController): Promise<ExtractAtomResponse> {
    if (!filePath) {
      GenericExceptionHandlers.ArgumentNullException('filePath');
    }

    const fileBinary = Utils.convertFileToBinary(filePath);

    const url = `${this.config.endpoint}atom/ocr`;

    return this.upload<ExtractAtomResponse>(url, fileBinary, cancellationToken);
  }

  /**
   * Extracts the atoms from a PDF document.
   * @param {string} filePath - The path to the PDF file.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<ExtractAtomResponse>} The atoms extracted from the PDF file.
   */
  pdf(filePath: string, cancellationToken: AbortController): Promise<ExtractAtomResponse> {
    if (!filePath) {
      GenericExceptionHandlers.ArgumentNullException('filePath');
    }

    const fileBinary = Utils.convertFileToBinary(filePath);

    const url = `${this.config.endpoint}atom/pdf`;

    return this.upload<ExtractAtomResponse>(url, fileBinary, cancellationToken);
  }

  /**
   * Extracts the atoms from a PNG image document.
   * @param {string} filePath - The path to the PNG file.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<ExtractAtomResponse>} The atoms extracted from the PNG file.
   */
  png(filePath: string, cancellationToken: AbortController): Promise<ExtractAtomResponse> {
    if (!filePath) {
      GenericExceptionHandlers.ArgumentNullException('filePath');
    }

    const fileBinary = Utils.convertFileToBinary(filePath);

    const url = `${this.config.endpoint}atom/png`;

    return this.upload<ExtractAtomResponse>(url, fileBinary, cancellationToken);
  }

  /**
   * Extracts the atoms from a PowerPoint (PPT or PPTX) document.
   * @param {string} filePath - The path to the PowerPoint file.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<ExtractAtomResponse>} The atoms extracted from the PowerPoint file.
   */
  powerpoint(filePath: string, cancellationToken: AbortController): Promise<ExtractAtomResponse> {
    if (!filePath) {
      GenericExceptionHandlers.ArgumentNullException('filePath');
    }

    const fileBinary = Utils.convertFileToBinary(filePath);

    const url = `${this.config.endpoint}atom/powerpoint?ocr`;

    return this.upload<ExtractAtomResponse>(url, fileBinary, cancellationToken);
  }

  /**
   * Extracts the atoms from a plain text (TXT) document.
   * @param {string} filePath - The path to the TXT file.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<ExtractAtomResponse>} The atoms extracted from the TXT file.
   */
  text(filePath: string, cancellationToken: AbortController): Promise<ExtractAtomResponse> {
    if (!filePath) {
      GenericExceptionHandlers.ArgumentNullException('filePath');
    }

    const fileBinary = Utils.convertFileToBinary(filePath);

    const url = `${this.config.endpoint}atom/text`;

    return this.upload<ExtractAtomResponse>(url, fileBinary, cancellationToken);
  }

  /**
   * Extracts the atoms from a Word document (DOC or DOCX).
   * @param {string} filePath - The path to the Word file.
   * @param {AbortController} [cancellationToken] - The cancellation token.
   * @returns {Promise<ExtractAtomResponse>} The atoms extracted from the Word file.
   */
  word(filePath: string, cancellationToken: AbortController): Promise<ExtractAtomResponse> {
    if (!filePath) {
      GenericExceptionHandlers.ArgumentNullException('filePath');
    }

    const fileBinary = Utils.convertFileToBinary(filePath);

    const url = `${this.config.endpoint}atom/word`;

    return this.upload<ExtractAtomResponse>(url, fileBinary, cancellationToken);
  }
}
