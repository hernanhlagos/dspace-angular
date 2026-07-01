import { ScriptParameterType } from './script-parameter-type.model';

/**
 * A parameter that can be used when running a script
 */
export class ScriptParameter {
  /**
   * The name of the parameter Eg. '-d', '-f' etc.
   */
  name: string;

  /**
   * Short description about the purpose of this parameter
   */
  description: string;

  /**
   * The type of parameter
   */
  type: ScriptParameterType;

  /**
   * The long name for this parameter Eg. '--directory', '--force' etc.
   */
  nameLong: string;

  /**
   * Whether or not this parameter is mandatory
   */
  mandatory: boolean;

  /**
   * List of allowed values for this parameter.
   * When present, the parameter can be rendered as a select input instead of a free-text input.
   */
  allowedValues?: string[];

}
