import {FC, ReactNode} from 'react';

export type ReactClassNameComponent<T = {}> = FC<{ className?: string } & T>

export type ComponentWithChildren<T = {}> = FC<{ children: ReactNode } & T>
