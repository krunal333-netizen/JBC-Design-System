
package com.jbc.designsystem.components

import androidx.compose.animation.core.*
import androidx.compose.foundation.layout.size
import androidx.compose.material.Icon
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp

@Composable
fun JBCAnimatedIcon(
    resourceId: Int,
    contentDescription: String,
    tint: Color = Color.Unspecified,
    size: Int = 24
) {
    val infiniteTransition = rememberInfiniteTransition()
    val alpha by infiniteTransition.animateFloat(
        initialValue = 1f,
        targetValue = 0.5f,
        animationSpec = infiniteRepeatable(
            animation = tween(1000, easing = LinearEasing),
            repeatMode = RepeatMode.Reverse
        )
    )

    Icon(
        painter = painterResource(id = resourceId),
        contentDescription = contentDescription,
        tint = tint.copy(alpha = alpha),
        modifier = Modifier.size(size.dp)
    )
}
