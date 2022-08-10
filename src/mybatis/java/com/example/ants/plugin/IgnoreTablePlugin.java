package com.example.ants.plugin;

import java.util.List;

import org.mybatis.generator.api.GeneratedXmlFile;
import org.mybatis.generator.api.IntrospectedTable;
import org.mybatis.generator.api.PluginAdapter;
import org.mybatis.generator.api.dom.java.Interface;
import org.mybatis.generator.api.dom.java.TopLevelClass;

/**
 * MyBatis Generator で自動生成するテーブルを除外するためのプラグイン
 */
public class IgnoreTablePlugin extends PluginAdapter {
    @Override
    public boolean validate(final List<String> warnings) {
        return true;
    }

    private boolean isInPropertiesTable(final IntrospectedTable introspectedTable) {
        return introspectedTable.getFullyQualifiedTableNameAtRuntime().equals(properties.get("tableName"));
    }

    @Override
    public boolean modelBaseRecordClassGenerated(final TopLevelClass topLevelClass, final IntrospectedTable introspectedTable) {
        return !isInPropertiesTable(introspectedTable);
    }

    @Override
    public boolean modelExampleClassGenerated(final TopLevelClass topLevelClass, final IntrospectedTable introspectedTable) {
        return !isInPropertiesTable(introspectedTable);
    }

    @Override
    public boolean clientGenerated(final Interface interfaze, final IntrospectedTable introspectedTable) {
        return !isInPropertiesTable(introspectedTable);
    }

    @Override
    public boolean sqlMapGenerated(final GeneratedXmlFile sqlMap, final IntrospectedTable introspectedTable) {
        return !isInPropertiesTable(introspectedTable);
    }
}
