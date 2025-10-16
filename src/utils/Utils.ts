import fs from 'fs';
import GenericExceptionHandlers from '../exception/GenericExceptionHandlers';

class Utils {
  /**
   * Converts a file to binary data.
   * @param {string} filePath - The path to the file.
   * @return {Buffer} The binary data of the file.
   */
  static convertFileToBinary(filePath: string): { buffer: Buffer; size: string } {
    try {
      if (!fs.existsSync(filePath)) {
        throw GenericExceptionHandlers.GenericException(`File not found at ${filePath}`);
      }
      const buf = fs.readFileSync(filePath); // Buffer with raw bytes
      const stat = fs.statSync(filePath);
      return { buffer: buf, size: String(stat.size) };
    } catch (err) {
      GenericExceptionHandlers.GenericException(err instanceof Error ? err.message : String(err));
      throw err;
    }
  }
}

export default Utils;
