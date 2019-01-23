<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="utf-8" />
<xsl:template match="/">
	<html>
		<body>
    
		<p>
			<xsl:apply-templates select="TEI/body" />
		</p>
	</body>
	</html>
	
</xsl:template>

<xsl:template match="lb">
	<sup><font size="-3" color="red"><xsl:value-of select="./@n" /></font></sup>
</xsl:template>

<xsl:template match="pb">
	<sup><font size="-3" color="green">p.<xsl:value-of select="./@n" /></font></sup>
</xsl:template>

<xsl:template match="p">
	<p><xsl:value-of select="." /></p>
</xsl:template>

<xsl:template match="verse">
	<br /><xsl:value-of select="." />
</xsl:template>

	
</xsl:stylesheet>
