package com.example.ants.enums.error;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum DetailErrorMessage {

    INVALID_QUERY_PARAMETER("クエリーパラメータの値が不正です"),
    NO_AUTHENTICATION("権限がありません"),
    NOT_EXIST("処理対象のデータはすでに削除されています"),
    UNEXPECTED_ARGS("想定されていない引数が関数内で呼び出されています"),
    NOT_CONNECT_DB("databaseサーバーに接続できませんでした"),
    API_NOT_FOUND("対象のapiが見つかりません"),
    API_NOT_RESPOND("対象のapiのサーバーに障害がありレスポンスが返ってきません"),
    INSUFFICIENT_PRIVILEGES("対象のapiエンドポイントを使用するための権限がありません"),
    UNEXPECTED_ERROR("想定外のエラーです");

    private final String message;
}
