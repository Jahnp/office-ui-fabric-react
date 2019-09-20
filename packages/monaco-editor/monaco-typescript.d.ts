// This file was generated by checking out and building monaco-typescript (https://github.com/Microsoft/monaco-typescript)
// and merging release/esm/*.d.ts together, with minor edits.

// merged imports from all files
import * as ts from 'typescript';
import * as monaco from '@uifabric/monaco-editor';
import CancellationToken = monaco.CancellationToken;
import IDisposable = monaco.IDisposable;
import IEvent = monaco.IEvent;
import IWorkerContext = monaco.worker.IWorkerContext;
import Position = monaco.Position;
import Range = monaco.Range;
import Thenable = monaco.Thenable;
import Uri = monaco.Uri;
// temporarily using this Omit to prevent TS compatibility breaks
import { Omit } from '@uifabric/utilities';

// convenience re-export
export type EmitOutput = ts.EmitOutput;

// languageFeatures.d.ts
export declare abstract class Adapter {
  protected _worker: (first: Uri, ...more: Uri[]) => Promise<TypeScriptWorker>;
  constructor(_worker: (first: Uri, ...more: Uri[]) => Promise<TypeScriptWorker>);
  protected _positionToOffset(uri: Uri, position: monaco.IPosition): number;
  protected _offsetToPosition(uri: Uri, offset: number): monaco.IPosition;
  protected _textSpanToRange(uri: Uri, span: ts.TextSpan): monaco.IRange;
}
export declare class DiagnostcsAdapter extends Adapter {
  private _defaults;
  private _selector;
  private _disposables;
  private _listener;
  constructor(_defaults: LanguageServiceDefaultsImpl, _selector: string, worker: (first: Uri, ...more: Uri[]) => Promise<TypeScriptWorker>);
  dispose(): void;
  private _doValidate;
  private _convertDiagnostics;
}
export declare class SuggestAdapter extends Adapter implements monaco.languages.CompletionItemProvider {
  readonly triggerCharacters: string[];
  provideCompletionItems(model: monaco.editor.IReadOnlyModel, position: Position, _context: monaco.languages.CompletionContext, token: CancellationToken): Thenable<monaco.languages.CompletionList>;
  resolveCompletionItem(_model: monaco.editor.IReadOnlyModel, _position: Position, item: monaco.languages.CompletionItem, token: CancellationToken): Thenable<monaco.languages.CompletionItem>;
  private static convertKind;
}
export declare class SignatureHelpAdapter extends Adapter implements monaco.languages.SignatureHelpProvider {
  signatureHelpTriggerCharacters: string[];
  provideSignatureHelp(model: monaco.editor.IReadOnlyModel, position: Position, token: CancellationToken): Thenable<monaco.languages.SignatureHelp>;
}
export declare class QuickInfoAdapter extends Adapter implements monaco.languages.HoverProvider {
  provideHover(model: monaco.editor.IReadOnlyModel, position: Position, token: CancellationToken): Thenable<monaco.languages.Hover>;
}
export declare class OccurrencesAdapter extends Adapter implements monaco.languages.DocumentHighlightProvider {
  provideDocumentHighlights(model: monaco.editor.IReadOnlyModel, position: Position, token: CancellationToken): Thenable<monaco.languages.DocumentHighlight[]>;
}
export declare class DefinitionAdapter extends Adapter {
  provideDefinition(model: monaco.editor.IReadOnlyModel, position: Position, token: CancellationToken): Thenable<monaco.languages.Definition>;
}
export declare class ReferenceAdapter extends Adapter implements monaco.languages.ReferenceProvider {
  provideReferences(model: monaco.editor.IReadOnlyModel, position: Position, context: monaco.languages.ReferenceContext, token: CancellationToken): Thenable<monaco.languages.Location[]>;
}
export declare class OutlineAdapter extends Adapter implements monaco.languages.DocumentSymbolProvider {
  provideDocumentSymbols(model: monaco.editor.IReadOnlyModel, token: CancellationToken): Thenable<monaco.languages.DocumentSymbol[]>;
}
export declare class Kind {
  static unknown: string;
  static keyword: string;
  static script: string;
  static module: string;
  static class: string;
  static interface: string;
  static type: string;
  static enum: string;
  static variable: string;
  static localVariable: string;
  static function: string;
  static localFunction: string;
  static memberFunction: string;
  static memberGetAccessor: string;
  static memberSetAccessor: string;
  static memberVariable: string;
  static constructorImplementation: string;
  static callSignature: string;
  static indexSignature: string;
  static constructSignature: string;
  static parameter: string;
  static typeParameter: string;
  static primitiveType: string;
  static label: string;
  static alias: string;
  static const: string;
  static let: string;
  static warning: string;
}
export declare abstract class FormatHelper extends Adapter {
  protected static _convertOptions(options: monaco.languages.FormattingOptions): ts.FormatCodeOptions;
  protected _convertTextChanges(uri: Uri, change: ts.TextChange): monaco.editor.ISingleEditOperation;
}
// Had to manually fix type mismatch here because monaco.editor.ISingleEditOperation allows text to be null
// but monaco.languages.TextEdit (the return type of this method in the base class) doesn't
export type ISingleEditOperation = Omit<monaco.editor.ISingleEditOperation, 'text'> & { text: string };
export declare class FormatAdapter extends FormatHelper implements monaco.languages.DocumentRangeFormattingEditProvider {
  provideDocumentRangeFormattingEdits(model: monaco.editor.IReadOnlyModel, range: Range, options: monaco.languages.FormattingOptions, token: CancellationToken): Thenable<ISingleEditOperation[]>;
}
export declare class FormatOnTypeAdapter extends FormatHelper implements monaco.languages.OnTypeFormattingEditProvider {
  readonly autoFormatTriggerCharacters: string[];
  provideOnTypeFormattingEdits(model: monaco.editor.IReadOnlyModel, position: Position, ch: string, options: monaco.languages.FormattingOptions, token: CancellationToken): Thenable<ISingleEditOperation[]>;
}

// monaco.contribution.d.ts
export interface IExtraLib {
  content: string;
  version: number;
}
export interface IExtraLibs {
  [path: string]: IExtraLib;
}
export declare class LanguageServiceDefaultsImpl implements monaco.languages.typescript.LanguageServiceDefaults {
  private _onDidChange;
  private _onDidExtraLibsChange;
  private _extraLibs;
  private _workerMaxIdleTime;
  private _eagerModelSync;
  private _compilerOptions;
  private _diagnosticsOptions;
  private _onDidExtraLibsChangeTimeout;
  constructor(compilerOptions: monaco.languages.typescript.CompilerOptions, diagnosticsOptions: monaco.languages.typescript.DiagnosticsOptions);
  readonly onDidChange: IEvent<void>;
  readonly onDidExtraLibsChange: IEvent<void>;
  getExtraLibs(): IExtraLibs;
  addExtraLib(content: string, filePath?: string): IDisposable;
  private _fireOnDidExtraLibsChangeSoon;
  getCompilerOptions(): monaco.languages.typescript.CompilerOptions;
  setCompilerOptions(options: monaco.languages.typescript.CompilerOptions): void;
  getDiagnosticsOptions(): monaco.languages.typescript.DiagnosticsOptions;
  setDiagnosticsOptions(options: monaco.languages.typescript.DiagnosticsOptions): void;
  setMaximumWorkerIdleTime(value: number): void;
  getWorkerMaxIdleTime(): number;
  setEagerModelSync(value: boolean): void;
  getEagerModelSync(): boolean;
}

// tsMode.d.ts
export declare function setupTypeScript(defaults: LanguageServiceDefaultsImpl): void;
export declare function setupJavaScript(defaults: LanguageServiceDefaultsImpl): void;
export declare function getJavaScriptWorker(): Promise<(first: Uri, ...more: Uri[]) => Promise<TypeScriptWorker>>;
export declare function getTypeScriptWorker(): Promise<(first: Uri, ...more: Uri[]) => Promise<TypeScriptWorker>>;

// tsWorker.d.ts
export declare class TypeScriptWorker implements ts.LanguageServiceHost {
  private _ctx;
  private _extraLibs;
  private _languageService;
  private _compilerOptions;
  constructor(ctx: IWorkerContext, createData: ICreateData);
  getCompilationSettings(): ts.CompilerOptions;
  getScriptFileNames(): string[];
  private _getModel;
  getScriptVersion(fileName: string): string;
  getScriptSnapshot(fileName: string): ts.IScriptSnapshot;
  getScriptKind?(fileName: string): ts.ScriptKind;
  getCurrentDirectory(): string;
  getDefaultLibFileName(options: ts.CompilerOptions): string;
  isDefaultLibFileName(fileName: string): boolean;
  private static clearFiles;
  getSyntacticDiagnostics(fileName: string): Promise<ts.Diagnostic[]>;
  getSemanticDiagnostics(fileName: string): Promise<ts.Diagnostic[]>;
  getCompilerOptionsDiagnostics(fileName: string): Promise<ts.Diagnostic[]>;
  getCompletionsAtPosition(fileName: string, position: number): Promise<ts.CompletionInfo>;
  getCompletionEntryDetails(fileName: string, position: number, entry: string): Promise<ts.CompletionEntryDetails>;
  getSignatureHelpItems(fileName: string, position: number): Promise<ts.SignatureHelpItems>;
  getQuickInfoAtPosition(fileName: string, position: number): Promise<ts.QuickInfo>;
  getOccurrencesAtPosition(fileName: string, position: number): Promise<ReadonlyArray<ts.ReferenceEntry>>;
  getDefinitionAtPosition(fileName: string, position: number): Promise<ReadonlyArray<ts.DefinitionInfo>>;
  getReferencesAtPosition(fileName: string, position: number): Promise<ts.ReferenceEntry[]>;
  getNavigationBarItems(fileName: string): Promise<ts.NavigationBarItem[]>;
  getFormattingEditsForDocument(fileName: string, options: ts.FormatCodeOptions): Promise<ts.TextChange[]>;
  getFormattingEditsForRange(fileName: string, start: number, end: number, options: ts.FormatCodeOptions): Promise<ts.TextChange[]>;
  getFormattingEditsAfterKeystroke(fileName: string, postion: number, ch: string, options: ts.FormatCodeOptions): Promise<ts.TextChange[]>;
  getEmitOutput(fileName: string): Promise<ts.EmitOutput>;
  updateExtraLibs(extraLibs: IExtraLibs): void;
}
export interface ICreateData {
  compilerOptions: ts.CompilerOptions;
  extraLibs: IExtraLibs;
}
export declare function create(ctx: IWorkerContext, createData: ICreateData): TypeScriptWorker;

// workerManager.d.ts
export declare class WorkerManager {
  private _modeId;
  private _defaults;
  private _idleCheckInterval;
  private _lastUsedTime;
  private _configChangeListener;
  private _updateExtraLibsToken;
  private _extraLibsChangeListener;
  private _worker;
  private _client;
  constructor(modeId: string, defaults: LanguageServiceDefaultsImpl);
  private _stopWorker;
  dispose(): void;
  private _updateExtraLibs;
  private _checkIfIdle;
  private _getClient;
  getLanguageServiceWorker(...resources: Uri[]): Promise<TypeScriptWorker>;
}
