import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';

import { CsvExportModule } from 'ag-grid-community';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  CsvExportModule,
]);
