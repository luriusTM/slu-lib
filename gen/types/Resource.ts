// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ResourceId } from './ResourceId.ts';
import type { ResourceKind } from './ResourceKind.ts';
import type { ResourceMetadata } from './ResourceMetadata.ts';
import type { ResourceStatus } from './ResourceStatus.ts';

export type Resource = {
  _id: string;
  creator_id: string;
  /**
   * visual id composed of creator username and resource name
   */
  friendly_id: ResourceId;
  metadata: ResourceMetadata;
  created_at: string;
  updated_at: string;
  status: ResourceStatus;
  /**
   * should be filled if `status == ResourceStatus::Deleted`
   */
  deleted_at: string | null;
  version: number;
  kind: ResourceKind;
  /**
   * id of the document containing the resource
   */
  data_id: string;
};
